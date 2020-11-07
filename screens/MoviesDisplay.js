import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList,ActivityIndicator,TouchableOpacity,Dimensions,Button } from 'react-native';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import {apiCall} from '../services/MoviesDbApiActionCreator';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

class MoviesDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            lan: 'en-US'
        }
    }

    componentDidMount(){
        this.props.apiCall('http://api.themoviedb.org/3/movie/popular?api_key=1ee6cf48a26e103af8d875ebd44c7a9a');
    }


    render(){
        console.log('in the render', this.props)
        const screenWidth = Math.round(Dimensions.get('window').width);
        const movies = this.props.data
        const navi=this.props.navigation
        //console.log('Movies', this.props.data)
        let{container}= styles
        return (
            <View >
                 <View style={{alignItems: 'flex-end'}}>
                 <Menu>
                <MenuTrigger style={{color: 'white',}} text='Change Language' />
                <MenuOptions>
                    <MenuOption onSelect={() => {
                        this.setState({lan: 'en-US'});
                        alert(`App changed language to English`)
                        }} >
                    <Text style={this.state.lan=='en-US'?({color: 'black',}):({color:'gray'})}>English</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => {
                        this.setState({lan: 'es-MX'});
                        alert(`La aplicacion cambio el idoma a Español`)}} >
                    <Text style={this.state.lan=='en-US'?({color: 'gray',}):({color:'black'})}>Español</Text>
                    </MenuOption>
                </MenuOptions>
                </Menu>
                </View>
                <View style={styles.Header}>
                <Button
                    onPress={()=>this.props.apiCall('http://api.themoviedb.org/3/movie/popular?api_key=1ee6cf48a26e103af8d875ebd44c7a9a')}
                    title="Popular"
                    color="black"
                />
                <Button
                    onPress={()=>this.props.apiCall('http://api.themoviedb.org/3/movie/top_rated?api_key=1ee6cf48a26e103af8d875ebd44c7a9a')}
                    title="Rating"
                    color="black"
                />
           
                </View>
                        {this.props.loading ? (
                <ActivityIndicator size="large" color="black" />
            ) :      ( //<Text>Hello, world!</Text>
                <FlatList
                data={movies}
                renderItem={({item, index})=>{
                    const imageUrl='https://image.tmdb.org/t/p/w342'+item.poster_path;
                    console.log('IMAGE_URL',imageUrl);
                    let {itemStyle} = styles
                    return(
                        <TouchableOpacity onPress={() =>navi.navigate("Movie",{id: item.id,poster:item.poster_path,title:item.title,lan:this.state.lan})}>
                        <View style={itemStyle}>
                            
                            <FastImage
                    style={{ width: screenWidth/2, height: 300 }}
                    source={{
                        uri: imageUrl,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                        </View>
                        </TouchableOpacity>
                    )
                }}
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
        
        justifyContent: 'center',
        height:300,
        flex:1,
        margin:1
    },
    Header: {
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white'
      }

});
function MapToStateProps(state){
    console.log('STATE',state);
    return {
        loading:state.apiReducer.loading,
        data: state.apiReducer.data.results,
        error: state.apiReducer.error,
    }
}

export default connect(MapToStateProps,{apiCall})(MoviesDisplay);
//export default MoviesDisplay;