import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList,ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import apiCall from '../services/MoviesDbApiActionCreator';
class MoviesDisplay extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
        this.props.apiCall('http://api.themoviedb.org/3/movie/popular?api_key=1ee6cf48a26e103af8d875ebd44c7a9a');
    }
    _go(routename){
        this.props.navigation.navigate(routename);
    }

    _mostPopular(){
        this.props.apiCall('http://api.themoviedb.org/3/movie/popular?api_key=1ee6cf48a26e103af8d875ebd44c7a9a');
    }

    _mostRated(){
        this.props.apiCall('http://api.themoviedb.org/3/tv/popular?api_key=1ee6cf48a26e103af8d875ebd44c7a9a');
    }

    _renderItem=({item, index})=>{
        const imageUrl='https://image.tmdb.org/t/p/w342'+item.poster_path;
        console.log('IMAGE_URL',imageUrl);
        let {itemStyle} = styles
        return(
            <View style={itemStyle}>
                  
                  <FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri: imageUrl,
            //headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
            </View>
        )
    }

    render(){
        console.log('in the render', this.props)
        const movies = this.props.data
        console.log('Movies', this.props.data)
        let{container}= styles
        return (
            <View >
                 {this.props.loading ? (
        <ActivityIndicator size="large" color="black" />
      ) :      ( //<Text>Hello, world!</Text>
        <FlatList
        data={movies}
        renderItem={this._renderItem}
        //renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />

            )}
            </View>
          )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 40
    },
    itemStyle:{
        alignItems:'center',
        justifyContent: 'center',
        height:200,
        flex:1,
        margin:1
    }

});
function MapToStateProps(state){
    console.log('STATE',state);
    return {
        loading:state.apiReducer.loading,
        data: state.apiReducer.data,
        error: state.apiReducer.error,
        //user : state.session && state.session.user ? state.session.user : false
    }
}

export default connect(MapToStateProps,{apiCall})(MoviesDisplay);
//export default MoviesDisplay;