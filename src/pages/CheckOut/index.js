import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import { ScrollView } from 'react-native-gesture-handler';

const CheckOut = () => {

    const notificationNavigation = useNavigation();

    useEffect(() => {
        notificationNavigation.setOptions({
          headerTransparent: true,
          headerTitle: () => <CustomText  style={styles.semibold} className="text-base text-black">CheckOut</CustomText>,
          headerStyle: {
            height: 80,        
          }
        });
      }, [notificationNavigation]);
    return (
        <ScrollView>
            <View className="m-6 mt-20">
            <CustomText className="text-gray-800  ml-1">CheckOut</CustomText>

            </View>
        </ScrollView>
    )
}

export default CheckOut

const styles = StyleSheet.create({
    semibold: {
        fontFamily: 'Poppins-SemiBold'
      },
  
})