import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useThemeColor } from '@/hooks/useThemeColor'

export type CustomButtonProps = {
    title: string;
    onPress: () => void;
    style?: object;
    textStyle?: object;
    lightColor?: string;
    darkColor?: string;
};

const CustomButton = ({
    title, onPress, style, textStyle, lightColor, darkColor
}: CustomButtonProps) => {
    const backgroundColor = useThemeColor({
        light: lightColor, dark: darkColor
    }, 'tint');

    return (
        <TouchableOpacity onPress={onPress}>
            <ThemedView
                style={[styles.button, { backgroundColor }, style]}
                lightColor={lightColor}
                darkColor={darkColor}
            >
                <ThemedText
                    style={[styles.text, textStyle]}
                >
                    {title}
                </ThemedText>
            </ThemedView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF'
    }
})

export default CustomButton