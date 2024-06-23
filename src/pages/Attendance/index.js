import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import {ScrollView} from 'react-native-gesture-handler';

const Attendance = () => {
  const attendanceNavigation = useNavigation();

  useEffect(() => {
    attendanceNavigation.setOptions({
      headerTransparent: true,
      headerTitle: () => (
        <CustomText style={styles.semibold} className="text-base text-black">
          Attendance
        </CustomText>
      ),
      headerStyle: {
        height: 80,
      },
    });
  }, [attendanceNavigation]);
  return (
    <ScrollView>
      <View className="m-6 mt-20">
        <CustomText className="text-gray-800  ml-1">Attendance</CustomText>
      </View>
    </ScrollView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
});
