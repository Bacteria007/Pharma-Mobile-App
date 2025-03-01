import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../../../components/headers/BackHeader'
import commonStyles from '../../../style/commonStyles'

const NotificationScreen = () => {
  return (
    <View style={commonStyles.container}>
      <BackHeader title={'Notifications'}/>
      <Text>NotificationScreen</Text>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})