import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import App from './App';
import {name as appName} from './app.json';

// 🔥 CRITICAL: Background message handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('📱 Background message:', remoteMessage);

  const { notification, data } = remoteMessage;

  if (notification) {
    await notifee.createChannel({
      id: data?.type === 'welcome_offer' ? 'offers' : 'default',
      name: data?.type === 'welcome_offer' ? 'Offers' : 'Default',
      importance: AndroidImportance.HIGH,
      sound: 'default',
      vibration: true,
    });

    await notifee.displayNotification({
      title: notification.title,
      body: notification.body,
      android: {
        channelId: data?.type === 'welcome_offer' ? 'offers' : 'default',
        importance: AndroidImportance.HIGH,
        pressAction: { id: 'default' },
        sound: 'default',
        vibrationPattern: [300, 500],
      },
      data: data || {},
    });
  }
});

AppRegistry.registerComponent(appName, () => App);