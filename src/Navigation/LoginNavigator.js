import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import LoginScreen from "../Screens/LoginScreen/LoginScreen";

export default StackNavigator(
    {
        Logins: {
            screen: LoginScreen,
        }
    })
    
    
