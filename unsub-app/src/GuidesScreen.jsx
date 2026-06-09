import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GUIDES } from './data';

const PRIMARY = '#6366F1';

function GuideItem({ guide }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.itemHeader} onPress={() => setOpen(o => !o)}>
        <Text style={styles.itemEmoji}>{guide.emoji}</Text>
        <Text style={styles.itemName}>{guide.name}</Text>
        <Text style={styles.itemArrow}>{open ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.itemBody}>
          {guide.steps.map((step, i) => (
            <View key={i} style={styles.step}>
              <View style={styles.stepNum}>
                <Text style={styles.stepNumText}>{i + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
          {guide.tip ? (
            <View style={styles.tip}>
              <Text style={styles.tipText}>💡 {guide.tip}</Text>
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
}

export default function GuidesScreen() {
  const [tab, setTab] = useState('kr');
  const filtered = GUIDES.filter(g => g.category === tab);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>취소 가이드</Text>
        <Text style={styles.headerSub}>단계별 구독 해지 방법</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, tab === 'kr' && styles.tabActive]}
          onPress={() => setTab('kr')}
        >
          <Text style={[styles.tabText, tab === 'kr' && styles.tabTextActive]}>🇰🇷 한국</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'global' && styles.tabActive]}
          onPress={() => setTab('global')}
        >
          <Text style={[styles.tabText, tab === 'global' && styles.tabTextActive]}>🌍 글로벌</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 100 }}>
        {filtered.map(g => <GuideItem key={g.name} guide={g} />)}
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
  headerSub: { fontSize: 13, color: '#9CA3AF', marginTop: 2 },
  tabs: {
    flexDirection: 'row', backgroundColor: '#fff',
    paddingHorizontal: 16, paddingBottom: 12, gap: 8,
  },
  tab: {
    flex: 1, paddingVertical: 10, borderRadius: 10,
    borderWidth: 1.5, borderColor: '#E5E7EB', alignItems: 'center',
  },
  tabActive: { borderColor: PRIMARY, backgroundColor: '#EEF2FF' },
  tabText: { fontSize: 14, fontWeight: '600', color: '#9CA3AF' },
  tabTextActive: { color: PRIMARY },
  item: {
    backgroundColor: '#fff', borderRadius: 16, marginBottom: 10, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  itemHeader: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 16,
  },
  itemEmoji: { fontSize: 26, marginRight: 12 },
  itemName: { flex: 1, fontSize: 15, fontWeight: '600', color: '#111827' },
  itemArrow: { fontSize: 12, color: '#9CA3AF' },
  itemBody: { paddingHorizontal: 16, paddingBottom: 16 },
  step: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  stepNum: {
    width: 22, height: 22, borderRadius: 11, backgroundColor: PRIMARY,
    alignItems: 'center', justifyContent: 'center', marginRight: 10, marginTop: 1,
  },
  stepNumText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  stepText: { flex: 1, fontSize: 14, color: '#374151', lineHeight: 20 },
  tip: {
    backgroundColor: '#EEF2FF', borderRadius: 10, padding: 12, marginTop: 6,
  },
  tipText: { fontSize: 13, color: '#4F46E5', lineHeight: 18 },
});
