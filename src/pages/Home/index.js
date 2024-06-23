import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {IconNotif, IconClock1, IconClock2, IconClock3} from '../../assets';
import {News, CustomText} from '../../components';
import profiles from '../../data/profile-images.js';
import news from '../../data/news.js';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const NotificationIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className="mr-4">
      <IconNotif width={24} height={24} />
    </TouchableOpacity>
  );
};


const NewsCarousel = ({news}) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const {width: screenWidth} = Dimensions.get('window');

  const renderPagination = () => (
    <Pagination
      dotsLength={news.length}
      activeDotIndex={activeSlide}
      containerStyle={{paddingVertical: 10}}
      dotStyle={{
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: 'red',
        marginTop: 10,
      }}
      inactiveDotStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0.26)',
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  const renderItem = ({item}) => (
    <View className="flex-1">
      <News
        key={item.id}
        photoProfile={item.photoProfile}
        name={item.name}
        day={item.day}
        date={item.date}
        text={item.text}
      />
    </View>
  );

  return (
    <View>
      <Carousel
        data={news}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 60}
        onSnapToItem={index => setActiveSlide(index)}
        activeDotIndex={2}
      />
      {renderPagination()}
    </View>
  );
};
const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: () => (
        <CustomText style={styles.semibold} className="text-2xl text-red-500">
          KerjaYuk!
        </CustomText>
      ),
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        height: 80,
        shadowOpacity: 0,
      },
      headerRight: () => (
        <NotificationIcon
          onPress={() => {
            navigation.navigate('Notifications');
          }}
        />
      ),
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, [navigation]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <CustomText className="text-gray-800 mx-6">
          Hi, Good Morning!
        </CustomText>
        <LinearGradient
          colors={['#EF2724', '#D71A46', '#C40F61']}
          locations={[0, 0.43, 0.79]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="p-5 rounded-2xl justify-center mt-2 mx-6">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/profile.jpg')}
              className="w-14 h-14 rounded-full mr-5"
            />
            <View className="flex-1">
              <View className="flex-row justify-between items-center">
                <CustomText
                  style={styles.bold}
                  className="text-white text-base">
                  Tabay
                </CustomText>
                <CustomText
                  style={styles.italic}
                  className="text-white text-xs text-gray-200">
                  Member Since
                </CustomText>
              </View>
              <View className="flex-row justify-between items-center mt-0">
                <CustomText className="text-white text-xs text-gray-200">
                  UI/UX Designer
                </CustomText>
                <CustomText style={styles.bold} className="text-white text-sm">
                  01 Juni 2021
                </CustomText>
              </View>
            </View>
          </View>
          <CustomText className="text-white text-xs mt-3 text-gray-200">
            Location
          </CustomText>
          <View className="flex-row justify-between items-center">
            <CustomText style={styles.bold} className="text-white text-sm">
              Kantor Sahid
            </CustomText>
            <CustomText
              style={styles.italic}
              className="text-white text-xs text-gray-200">
              ICO
            </CustomText>
          </View>
        </LinearGradient>
        <CustomText
          style={styles.bold}
          className="text-gray-800 mt-5 ml-1 mx-6 ">
          Today's activity
        </CustomText>
        <View className="flex-row justify-between mt-4 mx-6">
          <View className="flex-1 items-center">
            <IconClock1 width={40} height={40} />
            <CustomText
              style={styles.bold}
              className="text-base mt-2 text-black">
              8:30
            </CustomText>
            <CustomText className="text-xs">Check In</CustomText>
          </View>
          <View className="flex-1 items-center">
            <IconClock2 width={32} height={32} />
            <CustomText
              style={styles.bold}
              className="text-lg text-red-500 mt-2">
              03:00:00
            </CustomText>
            <CustomText className="text-xs mt-1">Working Hours</CustomText>
          </View>
          <View className="flex-1 items-center">
            <IconClock3 width={40} height={40} />
            <CustomText style={styles.bold} className="text-base mt-2">
              --:--
            </CustomText>
            <CustomText className="text-xs">Check Out</CustomText>
          </View>
        </View>
        <CustomText
          style={styles.bold}
          className="text-gray-800 mt-8 mb-2 ml-1 mx-6">
          PCS News
        </CustomText>
        <NewsCarousel news={news} />
        <CustomText style={styles.bold} className="text-gray-800 ml-1 mx-6">
          Online
        </CustomText>
        <View
          style={styles.shadow}
          className="flex-row flex-wrap bg-white  mb-3 justify-center px-2 py-4 rounded-2xl mt-2 mx-6">
          <View className="flex-row flex-wrap items-center">
            {profiles.map((profile, index) => (
              <View
                key={profile.id}
                className={`flex items-center ${index !== 0 ? '-ml-4' : ''}`}>
                <Image
                  source={profile.image}
                  style={styles.online.profileImage}
                  className="w-12 h-12 rounded-full"
                />
                <CustomText
                  style={styles.online.textName}
                  className="text-center mt-1 text-black">
                  {profile.name}
                </CustomText>
                <CustomText
                  style={styles.online.textLocation}
                  className="text-center">
                  {profile.location}
                </CustomText>
              </View>
            ))}
            <View className="flex items-start -ml-4">
              <LinearGradient
                colors={['#EF2724', '#D71A46', '#C40F61']}
                locations={[0, 0.43, 0.79]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white">
                <CustomText
                  style={styles.online.textMore}
                  className="text-center text-xs text-white ">
                  10 more
                </CustomText>
              </LinearGradient>
              <CustomText />
              <CustomText />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  semibold: {
    fontFamily: 'BalooBhaijaan-Regular',
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
  online: {
    textName: {
      fontSize: 9,
      fontFamily: 'Poppins-SemiBold',
    },
    textMore: {
      fontFamily: 'Poppins-SemiBold',
    },
    profileImage: {
      borderWidth: 2,
      borderColor: 'white',
    },
    textLocation: {
      fontSize: 8,
    },
  },
});
