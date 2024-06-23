import React, {useEffect} from 'react';
import {ImageBackground, Image} from 'react-native';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground className="flex-1 items-center justify-center">
      <Image source={Logo} />
    </ImageBackground>
  );
};

export default Splash;
