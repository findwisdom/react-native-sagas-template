/**
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {Provider} from 'react-redux';
import rootSaga from './Redux/Sagas/index.js';
import configureStore from './Redux/Store/Store.js';
import App from './Navigation/RootNavigation';

const store = configureStore();
store.runSaga(rootSaga);

export default class Root extends Component {
    
    state = {
        isLoadingComplete: false,
    };
    
    
    render() {
      
        // && !this.props.skipLoadingScreen
        if (!this.state.isLoadingComplete) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider store={store}>
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                        <App />
                    </View>
                </Provider>
            );
        }
    }
    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('../resource/image/robot-dev.png'),
                require('../resource/image/robot-prod.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'space-mono': require('../resource/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };
    
    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };
    
    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});



