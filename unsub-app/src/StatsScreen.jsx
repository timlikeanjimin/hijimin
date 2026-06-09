import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { loadSubs } from './storage';
import { toMonthlyKRW, getCostPerUse, FREQUENCY_OPTIONS } from './data';

const PRIMARY = '#6366F1';

function StatCard({ label, value, sub, color }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, color && { color }]}>{value}</Text>
      {sub ? <Text style={styles.statSub}>{sub}</Text> : null}
    </View>
  );
}

export default function StatsScreen() {
  const [subs, setSubs] = useState([]);

  useFocusEffect(useCallback(() => {
    loadSubs().then(setSubs);
  }, []));

  const totalMonthly = subs.reduce((s, x) => s + toMonthlyKRW(x.price, x.currency, x.cycle), 0);
  const totalYearly = totalMonthly * 12;

  const withCostPerUse = subs
    .filter(s => s.frequency)
    .map(s => {
      const cpu = getCostPerUse(s.price, s.currency, s.cycle, s.frequency);
      const freq = FREQUENCY_OPTIONS.find(f => f.value === s.frequency);
      return { ...s, cpu, freqLabel: freq?.label };
    })
    .sort((a, b) => (b.cpu || 0) - (a.cpu || 0));

  const cancelCandidates = subs.filter(s => {
    if (!s.frequency) return false;
    const cpu = getCostPerUse(s.price, s.currency, s.cycle, s.frequency);
    return cpu && (cpu > 5000 || s.frequency === 'rarely');
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>절약 현황</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 100 }}>
        {/* Summary cards */}
        <View style={styles.statsRow}>
          <StatCard
            label="이번 달 지출"
            value={'₩' + Math.round(totalMonthly).toLocaleString()}
            sub={subs.length + '개 구독'}
            color={PRIMARY}
          />
          <StatCard
            label="연간 지출 예상"
            value={'₩' + Math.round(totalYearly).toLocaleString()}
            sub="12개월 기준"
          />
        </View>

        {cancelCandidates.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>🔴 취소 추천 구독</Text>
            <Text style={styles.sectionSub}>회당 비용이 높거나 거의 안 쓰는 구독이에요</Text>
            {cancelCandidates.map(s => {
              const cpu = getCostPerUse(s.price, s.currency, s.cycle, s.frequency);
              const monthly = toMonthlyKRW(s.price, s.currency, s.cycle);
              return (
                <View key={s.id} style={styles.cancelCard}>
                  <Text style={styles.cancelEmoji}>{s.emoji}</Text>
                  <View style={styles.cancelInfo}>
                    <Text style={styles.cancelName}>{s.name}</Text>
                    <Text style={styles.cancelSub}>
                      월 ₩{Math.round(monthly).toLocaleString()} · {FREQUENCY_OPTIONS.find(f => f.value === s.frequency)?.label}
                    </Text>
                  </View>
                  <View style={styles.cancelRight}>
                    <Text style={styles.cpuValue}>₩{Math.round(cpu).toLocaleString()}</Text>
                    <Text style={styles.cpuLabel}>회당 비용</Text>
                  </View>
                </View>
              );
            })}
            <View style={styles.savingBox}>
              <Text style={styles.savingText}>
                이 구독 전부 취소하면 월{' '}
                <Text style={styles.savingAmt}>
                  ₩{Math.round(cancelCandidates.reduce((s, x) => s + toMonthlyKRW(x.price, x.currency, x.cycle), 0)).toLocaleString()}
                </Text>{' '}
                절약 가능해요
              </Text>
            </View>
          </>
        )}

        {withCostPerUse.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>📊 회당 비용 분석</Text>
            <Text style={styles.sectionSub}>높을수록 손해예요 (월 비용 ÷ 사용 횟수)</Text>
            {withCostPerUse.map(s => {
              const monthly = toMonthlyKRW(s.price, s.currency, s.cycle);
              const isExpensive = s.cpu > 5000;
              return (
                <View key={s.id} style={styles.cpuRow}>
                  <Text style={styles.cpuEmoji}>{s.emoji}</Text>
                  <View style={styles.cpuInfo}>
                    <Text style={styles.cpuName}>{s.name}</Text>
                    <Text style={styles.cpuFreq}>{s.freqLabel} · 월 ₩{Math.round(monthly).toLocaleString()}</Text>
                    <View style={styles.barBg}>
                      <View style={[
                        styles.barFill,
                        { width: `${Math.min(100, (s.cpu / 10000) * 100)}%` },
                        isExpensive && { backgroundColor: '#EF4444' },
                      ]} />
                    </View>
                  </View>
                  <Text style={[styles.cpuNum, isExpensive && { color: '#EF4444' }]}>
                    ₩{Math.round(s.cpu).toLocaleString()}
                  </Text>
                </View>
              );
            })}
          </>
        )}

        {subs.length > 0 && withCostPerUse.length === 0 && (
          <View style={styles.hint}>
            <Text style={styles.hintIcon}>💡</Text>
            <Text style={styles.hintText}>
              구독에 사용 빈도를 입력하면{'\n'}회당 비용으로 취소 여부를 분석해드려요
            </Text>
          </View>
        )}

        {subs.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📊</Text>
            <Text style={styles.emptyText}>구독을 추가하면 분석을 볼 수 있어요</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    paddingHorizontal: 20, paddingVertical: 16,
    backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#F3F4F6',
  },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#111827' },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  statCard: {
    flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  statLabel: { fontSize: 12, color: '#9CA3AF', marginBottom: 6 },
  statValue: { fontSize: 20, fontWeight: '700', color: '#111827' },
  statSub: { fontSize: 11, color: '#9CA3AF', marginTop: 4 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 4, marginTop: 8 },
  sectionSub: { fontSize: 12, color: '#9CA3AF', marginBottom: 12 },
  cancelCard: {
    backgroundColor: '#FFF1F2', borderRadius: 14, padding: 14, marginBottom: 8,
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#FEE2E2',
  },
  cancelEmoji: { fontSize: 28, marginRight: 12 },
  cancelInfo: { flex: 1 },
  cancelName: { fontSize: 14, fontWeight: '600', color: '#111827' },
  cancelSub: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
  cancelRight: { alignItems: 'flex-end' },
  cpuValue: { fontSize: 16, fontWeight: '700', color: '#DC2626' },
  cpuLabel: { fontSize: 11, color: '#9CA3AF' },
  savingBox: {
    backgroundColor: '#ECFDF5', borderRadius: 12, padding: 14, marginTop: 4, marginBottom: 20,
    borderWidth: 1, borderColor: '#A7F3D0',
  },
  savingText: { fontSize: 14, color: '#065F46', textAlign: 'center' },
  savingAmt: { fontWeight: '700', fontSize: 16 },
  cpuRow: {
    backgroundColor: '#fff', borderRadius: 14, padding: 14, marginBottom: 8,
    flexDirection: 'row', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 1,
  },
  cpuEmoji: { fontSize: 26, marginRight: 12 },
  cpuInfo: { flex: 1 },
  cpuName: { fontSize: 14, fontWeight: '600', color: '#111827' },
  cpuFreq: { fontSize: 12, color: '#9CA3AF', marginBottom: 6 },
  barBg: { height: 5, backgroundColor: '#F3F4F6', borderRadius: 99, overflow: 'hidden' },
  barFill: { height: 5, backgroundColor: PRIMARY, borderRadius: 99 },
  cpuNum: { fontSize: 15, fontWeight: '700', color: '#111827', marginLeft: 8 },
  hint: {
    backgroundColor: '#EEF2FF', borderRadius: 14, padding: 18, alignItems: 'center',
    marginTop: 8,
  },
  hintIcon: { fontSize: 28, marginBottom: 8 },
  hintText: { fontSize: 13, color: '#4F46E5', textAlign: 'center', lineHeight: 20 },
  empty: { alignItems: 'center', paddingTop: 60 },
  emptyIcon: { fontSize: 44, marginBottom: 12 },
  emptyText: { fontSize: 14, color: '#9CA3AF' },
});
