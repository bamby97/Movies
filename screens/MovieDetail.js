import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import apiCall from '../services/MoviesDbApiActionCreator';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60
const { width: SCREEN_WIDTH } = Dimensions.get('screen')


class MovieDetail extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    componentDidMount(){
      this.props.apiCall('https://api.themoviedb.org/3/movie/'+this.state.movieId+'?api_key=1ee6cf48a26e103af8d875ebd44c7a9a&language=en-US');
  }
  renderParallaxHeader = (value) => {
    return <FastImage
    style={Styles.image}
    source={{
        uri: 'https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg',
        //headers: { Authorization: 'someAuthToken' },
        priority: FastImage.priority.normal,
    }}
    //resizeMode={FastImage.resizeMode.contain}
/>;
  };
  renderFixedHeader = (value) => {
    return (
      <View style={Styles.fixedHeader}>
        <Text style={{color: 'white'}}>Fixed Header</Text>
      </View>
    );
  };
  renderStickyHeader = (value) => {
    const opacity = value.interpolate({
      inputRange: [0, 150, 200],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });
    return (
      <View style={Styles.stickyHeader}>
        <Animated.View style={[Styles.stickyHeaderBackground, {opacity}]} />
      </View>
    );
  };
    render(){
        
      const IHeight = 250;
      const HeaderHeight = 50;
  
      return (
        <SafeAreaView style={{flex: 1}}>
          <ParallaxScrollView
            style={{flex: 1}}
            parallaxHeaderHeight={IHeight}
            stickyHeaderHeight={HeaderHeight}
            parallaxHeader={this.renderParallaxHeader}
            fixedHeader={this.renderFixedHeader}
            stickyHeader={this.renderStickyHeader}>
            <View style={Styles.content}>
              <Text>Content</Text>
            </View>
          </ParallaxScrollView>
        </SafeAreaView>
      );
      }
}
const Styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  fixedHeader: {
    height: 50,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  stickyHeader: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  stickyHeaderBackground: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'purple',
  },
  content: {
    width: '100%',
    height: 10000,
    padding: 20,
    backgroundColor: 'green',
  },
});

function MapToStateProps(state){
  return {
      loading: state.loading,
      data: state.data,
      error: state.error,
      //user : state.session && state.session.user ? state.session.user : false
  }
}

export default connect(MapToStateProps,{apiCall})(MovieDetail);