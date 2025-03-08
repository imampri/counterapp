import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CounterComponentView from './component/CounterComponentView';

export default function HomeView() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='transparent' />
            <CounterComponentView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#429ef5',
        justifyContent: 'center',
        padding: 35,
    },
});