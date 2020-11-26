import React from 'react';
import OneSignal from 'react-native-onesignal';
import NewApp from './src';

function App() {
  React.useEffect(() => {
    OneSignal.init('f6415aee-11e1-4553-b6d0-d233ef07cc9c');

    OneSignal.addEventListener('opened', onOpened);
    return () => OneSignal.removeEventListener('opened', onOpened);
  }, []);

  function onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('openResult: ', openResult);
  }

  return <NewApp />;
}

export default App;
