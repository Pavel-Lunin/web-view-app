import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import Preloader from './Preloader';

const styles = {
  container: {
    flex: 1,
  },
};

const ContentView = () => {
  return (
    <View style={styles.container}>
      <WebView
        startInLoadingState={true}
        source={{ uri: 'https://www.salesforce.com/' }}
        style={{ marginTop: 25 }}
        renderLoading={() => {
          return <Preloader />;
        }}
      />
    </View>
  );
};

export default ContentView;
