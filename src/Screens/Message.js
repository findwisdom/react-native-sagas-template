import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
// navigation
import { TabNavigator, addNavigationHelpers, StackNavigator } from 'react-navigation'
// for connect redux and react
import { bindActionCreators } from 'redux';
import { Provider,connect } from 'react-redux'
import { requestLatestNews, sucLatestNews, fetchedLatestNews } from '../Redux/Actions/latestnews/latestnews';
import configStore from '../Redux/Store/Store.js'
// import actions
import {moveBrick, robBank, goBroke} from '../Redux/Actions/Actions'
// initialState
import initialState from '../Redux/State/initializeState'

// 赚钱页面
class Earn extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { earn, dispatch } = this.props
        // console.log( 'saa',initialState,earn )
        return(
            <View style={styles.container}>
                <Text>先赚一个亿！</Text>
                <Text>my money$:{earn.money}</Text>
                <Text>my last job:{earn.lastJob}</Text>
                <Button title="rob a bank" onPress={() => dispatch(robBank())}/>
                <Button title="move some Brick" onPress={() => dispatch(moveBrick())}/>
                <Text>价格指导：搬砖 -> $1; 打劫 -> $1000000</Text>
                <Button title="broke" onPress={() => dispatch(goBroke())}/>
            </View>
        )
    }
    
}

// 传入 earn页面的redux
const earnSelect = function (state) {
    return{
        earn: state.earn
    }
}
// 连接，吧earn上面的select传入earn的props里面
const ConnnetedEarn = connect(earnSelect)(Earn)

// tab navigation的另一个页面
class Screen extends Component{
    constructor(props){
        super(props)
    }
    render() {
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>
                <Text>SCREEN!</Text>
                <Button title="to stack2" onPress={() => {navigate('Stack2')}}/>
            </View>
        )
    }
}

// 注册一个tag navigator
const AppNav = TabNavigator({
    'earn':{
        screen: ConnnetedEarn
    },
    'screen': {
        screen: Screen
    }
})

// stack navigation 的页面
class Stack2 extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        // this.props.dispatch(fetchedLatestNews())
        console.log(this.props.latestNews)
    }
    
    render(){
        // const { latestNews } = this.props
        const { latestNews, dispatch } = this.props
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>Stack2</Text>
                <Button title="TO APP login" onPress={() => dispatch(fetchedLatestNews())}/>
                <Button title="TO APP NAV" onPress={() => navigate('screen')}/>
            </View>
        )
    }
}
const latestNewsSelect = function (state) {
    return{
        latestNews: state.latestNews
    }
}
// const matchDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         fetchedLatestNews: fetchedLatestNews,
//     }, dispatch)
// }
// 连接，吧earn上面的select传入earn的props里面
const ConnnetedlatestNews = connect(latestNewsSelect)(Stack2)
/*
* 注册stack
* 一个是 上面的 tag navigation的页面
* 另一个是 上面的 stack2
* */
const StackNav = StackNavigator({
    App:{
        screen: AppNav,
        title: 'app'
    },
    Stack2: {
        screen: ConnnetedlatestNews,
        title: 'stack2'
    }
})

const navInitialState = StackNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('screen'))
const navReducer = (state = navInitialState, action) => {
    // console.log('state:',state)
    let nextState = StackNav.router.getStateForAction(action, state);
    // console.log('action', action)
    return nextState || state
}

/*
* 加入navReducer,生成store
* */
const store = configStore({
    nav: navReducer
})({
    blacklist:['nav']
})

/*
* stack app
* 利用addNavigationHelper吧navigation传进去
* */
class App extends Component{
    render(){
        return(
            <StackNav screenProps={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })} />
        )
    }
}

/*
* 把nav传进去
* */
function select(state) {
    return {
        nav: state.nav
    }
}
/*
* connect connect!
* */
const ConnectedApp = connect(select)(App)


// 加上 provider和store
export default class reduxLearn extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedApp/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

