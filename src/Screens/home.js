/* @flow */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from 'antd-mobile';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {fetchedLatestNews} from "../Redux/Actions/latestnews/latestnews";

class MainPage extends Component {
    render() {
        const { latestNews, earn, dispatch } = this.props
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Text>先赚一个亿！</Text>
                <Text>my money$:{earn.money}</Text>
                <Text>my last job:{earn.lastJob}</Text>
                <Text>my last lastJob:{JSON.stringify(latestNews.data)}</Text>
                <Button onClick={() => dispatch(fetchedLatestNews())}>回到首页</Button>
            </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function select(state)
{
    return {
        earn: state.earn,
        latestNews: state.latestNews
    }
}
export default connect(select)(MainPage);
// export default MainPage;
