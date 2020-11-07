import React, {Component} from 'react';
import {Stylesheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../services/MoviesDbApiActionCreator';

class MoviesDisplay extends Component{
    //const dispatch= useDispatch();
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
        this.props.loadCards();
    }

    _go(routename){
        this.props.navigation.navigate(routename);
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

export default MoviesDisplay;