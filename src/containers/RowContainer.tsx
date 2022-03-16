import * as React from 'react'
import { StyleSheet, View } from 'react-native'

interface RowContainerProps {
    children?: any
    style?: any
}

const RowContainer: React.FunctionComponent<RowContainerProps> = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    )
}

export default RowContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})