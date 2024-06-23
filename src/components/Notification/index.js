import React from 'react';
import { StyleSheet, View, Text, Image, Span } from 'react-native';
import {CustomText} from '../../components';
import {IconAccepted} from '../../assets';


const Notification = ({ title, total, submission, time, status, isViewed }) => {
  let imageSource = '';
  if (title === 'reimbursement') {
    imageSource = require('../../assets/images/reimbursement.png');
  } else if (title === 'sickness') {
    imageSource = require('../../assets/images/sickness.png');
  } else if (title === 'overtime') {
    imageSource = require('../../assets/images/overtime.png');
  }

  const renderStatusText = () => {
    if (status === 'rejected' && title === 'reimbursement') {
      return (
        <CustomText className="text-xs">has been 
          <CustomText style={styles.bold}> {status}</CustomText>, please click for details.
        </CustomText>
      );
    } else if (status === 'processed' && title === 'reimbursement') {
      return (
        <CustomText className="text-xs"> will be 
            <CustomText style={styles.bold}> {status}</CustomText> according to reimbursement schedule. Please wait.
        </CustomText>
      );
    } else if (title === 'sickness' || title === 'overtime') {
      let textAkhir = '';
      let textAwal = 'has been ';
      if (status === 'approved') {
        textAkhir = " by the Superior";
      } else if (status === 'reviewed') {
        textAwal= "is being ";
        textAkhir =  " to the Superior for the approval process, please wait";
      } else if (status === 'rejected') {      
        textAkhir = ", please confirm with your Superior";
      }
      return (
        <CustomText className="text-xs">
         {status && (
            <CustomText> {textAwal}
              <CustomText style={styles.bold}>{status}</CustomText>{textAkhir}
            </CustomText>
          )}
        </CustomText>
      );
    }
    return null;
  };

  return (
    <View className={`flex-row p-4 items-center shadow-sm bg-white ${isViewed === true ? 'bg-sky-100' : ''}`}>
      <View className="relative mr-4">
        <Image source={imageSource} className="w-14 h-14 rounded-lg" />
        <IconAccepted className="w-5 h-5 absolute bottom-0 right-0 transform translate-y-0.5 translate-x-0.5" />
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between">
          <CustomText style={styles.bold} className="text-sm capitalize text-black">{title}</CustomText>
          <CustomText className="text-xs text-gray-500">{time}</CustomText>
        </View>
        <CustomText className="text-gray-800 mt-1 mr-4 text-xs">
          Your submission
          {submission ? (
            <CustomText style={styles.italic} className="text-xs"> "{submission}" </CustomText>
          ) : null}
          {total ? (
            <CustomText className="text-xs"> with a total cost of {total} has been <CustomText style={styles.bold}>{status}</CustomText>. Please check your BRIMO application. Thank you.</CustomText>
          ) : null}
          {renderStatusText()}
        </CustomText>
      </View>
    </View>
  );
};


export default Notification;

const styles = StyleSheet.create({ 
  bold:{
    fontFamily: 'Poppins-SemiBold'
  },
  italic:{
    fontFamily: 'Poppins-Italic'
  },

});
