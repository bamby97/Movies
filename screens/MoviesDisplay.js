import React, {Component} from 'react';
import {Stylesheet, Text, View, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import apiCall from '../services/MoviesDbApiActionCreator';
class MoviesDisplay extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
        this.props.apiCall()
    }
    _go(routename){
        this.props.navigation.navigate(routename);
    }

    _mostPopular(){

    }

    _mostRated(){
        
    }

    _renderItem=({item, index})=>{
        let {itemStyle, itemText} = styles
        return(
            <View style={item}>
                <FastImage source={{uri:item.image,
                priority: FastImage.priority.normal}}/>
            </View>
        )
    }

    render(){
        let{container}= styles
        return(
            <View style={container}>
                <FlatList
                    data={}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index)=> index.toString()}
                    numColumns={2}
                />
            </View>
        )
    }
}

export default connect(null,{apiCall})(MoviesDisplay);
//export default MoviesDisplay;