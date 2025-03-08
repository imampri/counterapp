import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import counterViewModel from '../../viewmodel/CounterViewModel';

const CounterComponentView = observer(() => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{counterViewModel.count}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => counterViewModel.decrement()} style={[styles.button, styles.decreaseButton]}>
                    <Text style={styles.decreaseText}>Subtract</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => counterViewModel.increment()} style={[styles.button, styles.increaseButton]}>
                    <Text style={styles.increaseText}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => counterViewModel.reset()} style={[styles.button, styles.resetButton]}>
                    <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textContainer: {
        marginBottom: 50,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: "#adb013"
    },
    text: {
        textAlign: 'center',
        padding: 20,
        fontSize: 40,
        fontWeight: "bold",
        color: "#ffffff"
    },
    buttonContainer: {
        flexDirection: 'column',
        rowGap: "10px",
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    button: {
        flex: 2,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    decreaseButton: {
        backgroundColor: '#eb8023',
    },
    decreaseText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
    },
    increaseButton: {
        backgroundColor: '#13b042',
        borderColor: '#fefefe',
    },
    increaseText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
    },
    resetButton: {
        backgroundColor: '#f5426f',
        paddingHorizontal: 25,
    },
    resetText: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
    },
});

export default CounterComponentView;