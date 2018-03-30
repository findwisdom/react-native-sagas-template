import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import {fetchedLatestNews} from "../../Redux/Actions/latestnews/latestnews";

class PersonScreen extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const { latestNews, earn, dispatch } = this.props
        const {navigate} = this.props.navigation
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Text>先赚一个亿！</Text>
                <Text>my money$:{earn.money}</Text>
                <Text>my last job:{earn.lastJob}</Text>
                <Text>my last lastJob:{JSON.stringify(latestNews.data)}</Text>
                <Button title="TO APP login" onPress={() => dispatch(fetchedLatestNews())}/>
                <Button title="TO APP NAV" onPress={() => navigate('Login')}/>
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
export default connect(select)(PersonScreen);
