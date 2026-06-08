import AsyncStorage from '@react-native-async-storage/async-storage';

const SUBS_KEY = 'unsub_subs';
const SAVED_KEY = 'unsub_saved';

export async function loadSubs() {
  try {
    const raw = await AsyncStorage.getItem(SUBS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveSubs(subs) {
  await AsyncStorage.setItem(SUBS_KEY, JSON.stringify(subs));
}

export async function loadSaved() {
  try {
    const raw = await AsyncStorage.getItem(SAVED_KEY);
    return raw ? parseFloat(raw) : 0;
  } catch {
    return 0;
  }
}

export async function saveSavedAmount(amount) {
  await AsyncStorage.setItem(SAVED_KEY, String(amount));
}
