import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import { ScrollView } from 'react-native-gesture-handler';

const Form = () => {

    const formNavigation = useNavigation();

    useEffect(() => {
        formNavigation.setOptions({
          headerTransparent: true,
          headerTitle: () => <CustomText  style={styles.semibold} className="text-base text-black">Form</CustomText>,
          headerStyle: {
            height: 80,        
          }        
        });
      }, [formNavigation]);
    return (
        <ScrollView>
            <View className="m-6 mt-20">
            <CustomText className="text-gray-800  ml-1">Form</CustomText>

            </View>
        </ScrollView>
    )
}

export default Form

const styles = StyleSheet.create({
    semibold: {
        fontFamily: 'Poppins-SemiBold'
      },
  
})