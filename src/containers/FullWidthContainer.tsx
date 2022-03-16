import * as React from 'react'
import { StyleSheet, View } from 'react-native'


interface FullWidthContainerProps {
    children?: any
    style?: any
}

const FullWidthContainer: React.FunctionComponent<FullWidthContainerProps> = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    )
}

export default FullWidthContainer

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})