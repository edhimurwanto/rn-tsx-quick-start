import * as React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { TITLE } from '@env'
import MyHeader from '@components/Header'
import FullWidthContainer from '@containers/FullWidthContainer'

interface HomeScreenProps { }

const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props: HomeScreenProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <MyHeader
                title={TITLE}
                subtitle='Quick Start' />

            <FullWidthContainer>
                <Text>{TITLE}</Text>
            </FullWidthContainer>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})