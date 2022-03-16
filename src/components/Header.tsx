import { moderateScale } from '@styles/scaling'
import * as React from 'react'
import { SafeAreaView, View, Text, useColorScheme, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface MyHeaderProps {
    title?: string
    subtitle?: string
}

const MyHeader: React.FunctionComponent<MyHeaderProps> = (props: MyHeaderProps) => {

    const isDarkMode = useColorScheme() === 'dark'
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        color: isDarkMode ? Colors.light : Colors.dark,
    }
    const { title, subtitle } = props

    return (
        <SafeAreaView style={[styles.container, { ...backgroundStyle }]}>
            <View style={styles.content} testID='container'>
                <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center' }}>
                    <Text style={{ fontSize: 20, ...backgroundStyle }} testID='title'>
                        {title}
                    </Text>
                    <Text style={{ fontSize: 16, ...backgroundStyle }} testID='subtitle'>
                        {subtitle}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MyHeader

export const styles = StyleSheet.create({
    container: {
        height: moderateScale(56),
        elevation: 4,
        backgroundColor: 'white',
        paddingHorizontal: moderateScale(15)
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
    }
})