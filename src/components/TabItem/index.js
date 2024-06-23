import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconHome, IconHomeActive, IconSetting, IconSettingActive, IconFormActive, IconForm, IconAttendance, IconAttendanceActive, IconCheckOut} from '../../assets';
import CustomText from '../../components/CustomText';

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome />;
    if(label === "Attendance") return isFocused ? <IconAttendanceActive/> : <IconAttendance />;
    if(label === "Checkout") return <IconCheckOut />;
    if(label === "Form") return isFocused ? <IconFormActive/> : <IconForm />;
    if(label === "Settings") return isFocused ? <IconSettingActive/> : <IconSetting />;
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={label === "Checkout" ? styles.checkoutContainer : styles.container}>
      <View style={label === "Checkout" ? styles.checkoutIcon : null}>
        <Icon />           
      </View>
      <CustomText style={styles.text(isFocused, label)} className="mt-2">{label}</CustomText>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused, label) => ({ 
    color: label === "Checkout" ? 'red' : (isFocused ? 'red' : '#C8C8C8'),  
    fontSize:10 
  }),
  checkoutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    marginTop: -30,
  },
  checkoutIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
