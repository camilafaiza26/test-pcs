import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import {ScrollView} from 'react-native-gesture-handler';

const Settings = () => {
  const settingsNavigation = useNavigation();

  useEffect(() => {
    settingsNavigation.setOptions({
      headerTransparent: true,
      headerTitle: () => (
        <CustomText style={styles.headerTitle} className="text-base text-black">
          Settings
        </CustomText>
      ),
      headerStyle: {
        height: 80,
      },
    });
  }, [settingsNavigation]);
  return (
    <ScrollView>
      <View className="m-6 mt-20">
        <CustomText className="text-gray-800  ml-1">Settings</CustomText>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
  },
  extrabold: {
    fontFamily: 'Poppins-ExtraBold',
  },
  bold: {
    fontFamily: 'Poppins-SemiBold',
  },
  italic: {
    fontFamily: 'Poppins-MediumItalic',
  },
});
