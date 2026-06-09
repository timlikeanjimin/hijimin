import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Modal, TextInput,
  StyleSheet, ScrollView, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadSubs, saveSubs } from './storage';
import { PRESETS, FREQUENCY_OPTIONS, toMonthlyKRW, formatPrice, getRecommendation } from './data';

const PRIMARY = '#6366F1';
const CYCLES = [
  { value: 'monthly', label: '월' },
  { value: 'yearly', label: '연' },
  { value: 'weekly', label: '주' },
];
const CURRENCIES = ['KRW', 'USD', 'EUR'];

function RecommendBadge({ rec }) {
  if (!rec) return null;
  const config = {
    cancel: { bg: '#FEE2E2', color: '#DC2626', text: '취소 추천' },
    review: { bg: '#FEF9C3', color: '#CA8A04', text: '검토 필요' },
    keep: { bg: '#D1FAE5', color: '#059669', text: '유지 추천' },
  };
  const c = config[rec];
  return (
    <View style={[styles.badge, { backgroundColor: c.bg }]}>
      <Text style={[styles.badgeText, { color: c.color }]}>{c.text}</Text>
    </View>
  );
}

function SubCard({ item, onDelete, onEdit }) {
  const rec = getRecommendation(item.price, item.currency, item.cycle, item.frequency);
  const monthly = toMonthlyKRW(item.price, item.currency, item.cycle);
  const freq = FREQUENCY_OPTIONS.find(f => f.value === item.frequency);

  return (
    <TouchableOpacity style={styles.card} onLongPress={() => {
      Alert.alert(item.emoji + ' ' + item.name, '삭제할까요?', [
        { text: '취소', style: 'cancel' },
        { text: '삭제', style: 'destructive', onPress: () => onDelete(item.id) },
      ]);
    }}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardEmoji}>{item.emoji}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{item.name}</Text>
          <Text style={styles.cardSub}>
            {formatPrice(item.price, item.currency)}/{item.cycle === 'monthly' ? '월' : item.cycle === 'yearly' ? '년' : '주'}
            {freq ? '  ·  ' + freq.label : ''}
          </Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardMonthly}>₩{Math.round(monthly).toLocaleString()}</Text>
        <Text style={styles.cardMonthlyLabel}>/월</Text>
        <RecommendBadge rec={rec} />
      </View>
    </TouchableOpacity>
  );
}

export default function SubscriptionsScreen() {
  const [subs, setSubs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    name: '', emoji: '💳', price: '', currency: 'KRW',
    cycle: 'monthly', frequency: '', billingDay: '',
  });

  useEffect(() => {
    loadSubs().then(setSubs);
  }, []);

  const totalMonthly = subs.reduce((s, x) => s + toMonthlyKRW(x.price, x.currency, x.cycle), 0);

  const openAdd = useCallback(() => {
    setForm({ name: '', emoji: '💳', price: '', currency: 'KRW', cycle: 'monthly', frequency: '', billingDay: '' });
    setModalVisible(true);
  }, []);

  const selectPreset = useCallback((p) => {
    setForm(f => ({ ...f, name: p.name, emoji: p.emoji, price: String(p.price), currency: p.currency, cycle: p.cycle }));
  }, []);

  const handleSave = useCallback(async () => {
    if (!form.name.trim() || !form.price) {
      Alert.alert('입력 오류', '이름과 금액을 입력해주세요.');
      return;
    }
    const newSub = {
      id: Date.now().toString(),
      name: form.name.trim(),
      emoji: form.emoji,
      price: parseFloat(form.price),
      currency: form.currency,
      cycle: form.cycle,
      frequency: form.frequency || null,
      billingDay: form.billingDay ? parseInt(form.billingDay) : null,
      addedAt: new Date().toISOString(),
    };
    const updated = [...subs, newSub];
    setSubs(updated);
    await saveSubs(updated);
    setModalVisible(false);
  }, [form, subs]);

  const handleDelete = useCallback(async (id) => {
    const updated = subs.filter(s => s.id !== id);
    setSubs(updated);
    await saveSubs(updated);
  }, [subs]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>내 구독</Text>
          <Text style={styles.headerSub}>총 {subs.length}개</Text>
        </View>
        <View style={styles.headerAmount}>
          <Text style={styles.headerAmountLabel}>월 지출</Text>
          <Text style={styles.headerAmountValue}>₩{Math.round(totalMonthly).toLocaleString()}</Text>
        </View>
      </View>

      {subs.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>💳</Text>
          <Text style={styles.emptyTitle}>구독이 없어요</Text>
          <Text style={styles.emptySub}>아래 + 버튼으로 추가해보세요</Text>
        </View>
      ) : (
        <FlatList
          data={subs}
          keyExtractor={i => i.id}
          renderItem={({ item }) => (
            <SubCard item={item} onDelete={handleDelete} />
          )}
          contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        />
      )}

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={openAdd}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Add Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalSheet}>
              <View style={styles.modalHandle} />
              <Text style={styles.modalTitle}>구독 추가</Text>

              {/* Presets */}
              <Text style={styles.sectionLabel}>빠른 선택</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.presetScroll}>
                {PRESETS.map((p) => (
                  <TouchableOpacity
                    key={p.name}
                    style={[styles.presetChip, form.name === p.name && styles.presetChipActive]}
                    onPress={() => selectPreset(p)}
                  >
                    <Text style={styles.presetEmoji}>{p.emoji}</Text>
                    <Text style={[styles.presetName, form.name === p.name && styles.presetNameActive]}>
                      {p.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <ScrollView showsVerticalScrollIndicator={false}>
                {/* Name */}
                <Text style={styles.sectionLabel}>서비스 이름</Text>
                <TextInput
                  style={styles.input}
                  value={form.name}
                  onChangeText={v => setForm(f => ({ ...f, name: v }))}
                  placeholder="넷플릭스, 유튜브 프리미엄..."
                  placeholderTextColor="#9CA3AF"
                />

                {/* Price + Currency + Cycle */}
                <Text style={styles.sectionLabel}>금액</Text>
                <View style={styles.row}>
                  <TextInput
                    style={[styles.input, { flex: 1, marginRight: 8 }]}
                    value={form.price}
                    onChangeText={v => setForm(f => ({ ...f, price: v }))}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor="#9CA3AF"
                  />
                  <View style={styles.segmentGroup}>
                    {CURRENCIES.map(c => (
                      <TouchableOpacity
                        key={c}
                        style={[styles.segment, form.currency === c && styles.segmentActive]}
                        onPress={() => setForm(f => ({ ...f, currency: c }))}
                      >
                        <Text style={[styles.segmentText, form.currency === c && styles.segmentTextActive]}>{c}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                {/* Cycle */}
                <Text style={styles.sectionLabel}>결제 주기</Text>
                <View style={styles.segmentGroup}>
                  {CYCLES.map(c => (
                    <TouchableOpacity
                      key={c.value}
                      style={[styles.segment, styles.segmentWide, form.cycle === c.value && styles.segmentActive]}
                      onPress={() => setForm(f => ({ ...f, cycle: c.value }))}
                    >
                      <Text style={[styles.segmentText, form.cycle === c.value && styles.segmentTextActive]}>{c.label}정기</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Frequency */}
                <Text style={styles.sectionLabel}>사용 빈도 <Text style={styles.optional}>(선택)</Text></Text>
                <Text style={styles.freqHint}>입력하면 회당 비용으로 취소 추천을 분석해드려요</Text>
                <View style={styles.freqGroup}>
                  {FREQUENCY_OPTIONS.map(opt => (
                    <TouchableOpacity
                      key={opt.value}
                      style={[styles.freqChip, form.frequency === opt.value && styles.freqChipActive]}
                      onPress={() => setForm(f => ({ ...f, frequency: f.frequency === opt.value ? '' : opt.value }))}
                    >
                      <Text style={[styles.freqText, form.frequency === opt.value && styles.freqTextActive]}>
                        {opt.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Billing day */}
                <Text style={styles.sectionLabel}>결제일 <Text style={styles.optional}>(선택, 1~31)</Text></Text>
                <TextInput
                  style={[styles.input, { width: 80 }]}
                  value={form.billingDay}
                  onChangeText={v => setForm(f => ({ ...f, billingDay: v }))}
                  keyboardType="numeric"
                  placeholder="15"
                  placeholderTextColor="#9CA3AF"
                  maxLength={2}
                />

                {/* Buttons */}
                <View style={[styles.row, { marginTop: 24, marginBottom: 8 }]}>
                  <TouchableOpacity style={styles.btnCancel} onPress={() => setModalVisible(false)}>
                    <Text style={styles.btnCancelText}>취소</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnSave} onPress={handleSave}>
                    <Text style={styles.btnSaveText}>저장</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingVertical: 16, backgroundColor: '#fff',
    borderBottomWidth: 1, borderBottomColor: '#F3F4F6',
  },
  headerTitle: { fontSize: 22, fontWeight: '700', color: '#111827' },
  headerSub: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  headerAmount: { alignItems: 'flex-end' },
  headerAmountLabel: { fontSize: 11, color: '#9CA3AF' },
  headerAmountValue: { fontSize: 20, fontWeight: '700', color: PRIMARY },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyIcon: { fontSize: 48, marginBottom: 12 },
  emptyTitle: { fontSize: 18, fontWeight: '600', color: '#374151' },
  emptySub: { fontSize: 14, color: '#9CA3AF', marginTop: 6 },
  card: {
    backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 10,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06,
    shadowRadius: 4, elevation: 2,
  },
  cardLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  cardEmoji: { fontSize: 32, marginRight: 12 },
  cardInfo: { flex: 1 },
  cardName: { fontSize: 15, fontWeight: '600', color: '#111827' },
  cardSub: { fontSize: 12, color: '#9CA3AF', marginTop: 3 },
  cardRight: { alignItems: 'flex-end' },
  cardMonthly: { fontSize: 16, fontWeight: '700', color: '#111827' },
  cardMonthlyLabel: { fontSize: 11, color: '#9CA3AF' },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 99, marginTop: 4 },
  badgeText: { fontSize: 11, fontWeight: '600' },
  fab: {
    position: 'absolute', bottom: 90, right: 20,
    width: 56, height: 56, borderRadius: 28,
    backgroundColor: PRIMARY, alignItems: 'center', justifyContent: 'center',
    shadowColor: PRIMARY, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.35, shadowRadius: 8, elevation: 6,
  },
  fabText: { color: '#fff', fontSize: 28, lineHeight: 32 },
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
  modalSheet: {
    backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24,
    paddingHorizontal: 20, paddingTop: 12, paddingBottom: 32, maxHeight: '92%',
  },
  modalHandle: { width: 36, height: 4, borderRadius: 2, backgroundColor: '#E5E7EB', alignSelf: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 20, fontWeight: '700', color: '#111827', marginBottom: 16 },
  sectionLabel: { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 8, marginTop: 16 },
  optional: { fontWeight: '400', color: '#9CA3AF' },
  freqHint: { fontSize: 12, color: '#9CA3AF', marginBottom: 10, marginTop: -4 },
  presetScroll: { marginBottom: 4, marginHorizontal: -4 },
  presetChip: {
    alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 12, borderWidth: 1.5, borderColor: '#E5E7EB',
    marginHorizontal: 4, backgroundColor: '#fff',
  },
  presetChipActive: { borderColor: PRIMARY, backgroundColor: '#EEF2FF' },
  presetEmoji: { fontSize: 20, marginBottom: 2 },
  presetName: { fontSize: 11, color: '#6B7280' },
  presetNameActive: { color: PRIMARY, fontWeight: '600' },
  input: {
    borderWidth: 1.5, borderColor: '#E5E7EB', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, color: '#111827', backgroundColor: '#fff',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  segmentGroup: { flexDirection: 'row', borderRadius: 10, overflow: 'hidden', borderWidth: 1.5, borderColor: '#E5E7EB', alignSelf: 'flex-start' },
  segment: { paddingHorizontal: 14, paddingVertical: 10, backgroundColor: '#fff' },
  segmentWide: { paddingHorizontal: 18 },
  segmentActive: { backgroundColor: PRIMARY },
  segmentText: { fontSize: 13, color: '#6B7280', fontWeight: '500' },
  segmentTextActive: { color: '#fff', fontWeight: '700' },
  freqGroup: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  freqChip: {
    paddingHorizontal: 14, paddingVertical: 8, borderRadius: 99,
    borderWidth: 1.5, borderColor: '#E5E7EB', backgroundColor: '#fff',
  },
  freqChipActive: { borderColor: PRIMARY, backgroundColor: '#EEF2FF' },
  freqText: { fontSize: 13, color: '#6B7280' },
  freqTextActive: { color: PRIMARY, fontWeight: '600' },
  btnCancel: {
    flex: 1, paddingVertical: 14, borderRadius: 12, marginRight: 8,
    borderWidth: 1.5, borderColor: '#E5E7EB', alignItems: 'center',
  },
  btnCancelText: { fontSize: 15, fontWeight: '600', color: '#6B7280' },
  btnSave: { flex: 2, paddingVertical: 14, borderRadius: 12, backgroundColor: PRIMARY, alignItems: 'center' },
  btnSaveText: { fontSize: 15, fontWeight: '700', color: '#fff' },
});
