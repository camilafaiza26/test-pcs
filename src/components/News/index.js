import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import CustomText from '../CustomText';

const News = ({photoProfile, name, day, date, text, id}) => {
  return (
    <View className="bg-white border border-gray-200 py-4 px-4 rounded-2xl shadow">
      <View className="flex-row mb-2">
        <View className="flex-none mr-4">
          <Image source={photoProfile} className="w-10 h-10 rounded-full" />
        </View>
        <View className="flex-1 flex flex-col">
          <View className="flex flex-row justify-between items-center">
            <CustomText
              style={styles.semiBold}
              className="text-sm text-red-500">
              {name}
            </CustomText>
            <View className="flex flex-col items-end">
              <CustomText className="text-xs text-gray-800">{day}</CustomText>
              <CustomText className="text-xs text-gray-800">{date}</CustomText>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-1">
        {text &&
          text.map((textNews, index) => (
            <CustomText key={index} className="text-xs text-gray-800">
              {textNews}
            </CustomText>
          ))}
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  semiBold: {
    fontFamily: 'Poppins-SemiBold',
  },

  shadow: {
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 3,
  },
});
