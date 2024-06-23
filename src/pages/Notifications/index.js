import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import Notification from '../../components/Notification';
import dataNotifications from '../../data/notification';

const Notifications = () => {
  const navigationNotif = useNavigation();

  useEffect(() => {
    navigationNotif.setOptions({
      headerTitle: () => (
        <CustomText style={styles.headerTitle} className="text-xl text-red-500">
          Notifications
        </CustomText>
      ),
      headerLeftContainerStyle: {
        marginLeft: 10,
      },
    });
  }, [navigationNotif]);

  return (
    <ScrollView>
      <View>
        {dataNotifications.map(notification => (
          <Notification
            key={notification.id}
            title={notification.title}
            total={notification.total}
            submission={notification.submission}
            time={notification.time}
            status={notification.status}
            isViewed={notification.isViewed}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
  },
});
