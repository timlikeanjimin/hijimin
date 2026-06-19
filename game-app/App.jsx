import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GAME_HTML } from './game/gameHtml';

const STORE_KEY = 'spark_survivor_save_v1';
const DEFAULT_SAVE = { gold: 0, meta: {}, bestTime: 0, sound: true, music: false };

export default function App() {
  const webRef = useRef(null);
  const [save, setSave] = useState(null);

  // 앱 시작 시 저장된 진행상황(스테이지 잠금해제/기록) 로드
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORE_KEY);
        setSave(raw ? { ...DEFAULT_SAVE, ...JSON.parse(raw) } : DEFAULT_SAVE);
      } catch (e) {
        setSave(DEFAULT_SAVE);
      }
    })();
  }, []);

  // 안드로이드 뒤로가기 → 게임에 전달(일시정지/메뉴). 앱은 종료하지 않음.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      webRef.current?.postMessage(JSON.stringify({ type: 'back' }));
      return true;
    });
    return () => sub.remove();
  }, []);

  // 게임에서 올라온 메시지 처리(진행상황 전체 저장)
  const onMessage = async (event) => {
    try {
      const msg = JSON.parse(event.nativeEvent.data);
      if (msg.type === 'save' && msg.save) {
        await AsyncStorage.setItem(STORE_KEY, JSON.stringify(msg.save));
        setSave(msg.save);
      }
    } catch (e) {
      // ignore malformed messages
    }
  };

  // save 로드 전에는 렌더 보류(진행상황을 주입한 상태로 1회만 로드)
  if (save === null) {
    return <View style={styles.root} />;
  }

  const injectSave = `window.__SAVE__ = ${JSON.stringify(save)}; true;`;

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <WebView
        ref={webRef}
        style={styles.web}
        originWhitelist={['*']}
        source={{ html: GAME_HTML, baseUrl: 'https://localhost/' }}
        injectedJavaScriptBeforeContentLoaded={injectSave}
        onMessage={onMessage}
        javaScriptEnabled
        domStorageEnabled
        scrollEnabled={false}
        overScrollMode="never"
        bounces={false}
        setBuiltInZoomControls={false}
        allowFileAccess
        androidLayerType="hardware"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0b1020' },
  web: { flex: 1, backgroundColor: '#0b1020' },
});
