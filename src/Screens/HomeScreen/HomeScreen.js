import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../../components/StyledText';

import styles from './style'

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={
                                __DEV__
                                    ? require('../../../resource/image/robot-dev.png')
                                    : require('../../../resource/image/robot-prod.png')
                            }
                            style={styles.welcomeImage}
                        />
                    </View>
                    
                    <View style={styles.getStartedContainer}>
                        
                        <Text style={styles.getStartedText}>Get started by opening</Text>
                        
                        <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                            <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
                        </View>
                        
                        <Text style={styles.getStartedText}>
                            Change this text and your app will automatically reload.
                        </Text>
                    </View>
                    
                </ScrollView>
                
                <View style={styles.tabBarInfoContainer}>
                    <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
                    
                    <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                        <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
                    </View>
                </View>
            </View>
        );
    }
}

