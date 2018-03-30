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

import styles from './style'

import { Button } from 'antd-mobile';

export default class LoginScreen extends Component {
    constructor(props){
        super(props)
    }
    
    static navigationOptions = {
        header: null,
    };
    
    render() {
    
        const {navigate} = this.props.navigation
        
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    
                    <View style={styles.getStartedContainer}>
                        
                        <Text style={styles.getStartedText}>
                            Change this text and your app will automatically reload.
                        </Text>
                    </View>
                    <Button>antd-mobile button</Button>
                </ScrollView>
                
            </View>
        );
    }
}

