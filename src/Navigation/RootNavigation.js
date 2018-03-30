import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginNavigator';

const RootStackNavigator = StackNavigator(
    {
        Main: {
            screen: MainTabNavigator,
        },
        Login: {
            screen: LoginNavigator,
        },
    },
    {
        navigationOptions: () => ({
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        }),
    }
);
export default RootStackNavigator


