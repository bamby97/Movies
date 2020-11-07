import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getMovieDetails} from '../services/MoviesDbApiActionCreator';
import {connect} from 'react-redux';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';



class MovieDetail extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    language="en-US"
    componentDidMount(){
      console.log("propsDidMount",this.props)
      const id=this.props.route.params.id
      const lan=this.props.route.params.lan
      this.props.getMovieDetails(id,lan);
  }
  
  renderParallaxHeader = (value) => {
    return <FastImage
    style={Styles.image}
    source={{
        uri: 'https://image.tmdb.org/t/p/w500'+this.props.route.params.poster,
        //headers: { Authorization: 'someAuthToken' },
        priority: FastImage.priority.normal,
    }}
    //resizeMode={FastImage.resizeMode.contain}
/>;
  };
  renderFixedHeader = (value) => {
    return (
      <View style={Styles.fixedHeader}>
        <Text style={{color: 'white'}}>{this.props.route.params.title}</Text>
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

  renderParallaxForeground= (value) => {
    return(
      <View style={Styles.foreground}>
        <Text style={Styles.title}>{this.props.route.params.title}</Text>
        </View>
    );
  }
    render(){
      console.log("props",this.props)
      const movie = this.props.data
      const IHeight = 250;
      const HeaderHeight = 50;
      console.log("MOVIE",movie)
      return (
        //<SafeAreaView style={{flex: 1}}>
          <ParallaxScroll
      renderHeader={this.renderFixedHeader}
      headerHeight={50}
      isHeaderFixed={true}
      parallaxHeight={250}
      renderParallaxBackground={this.renderParallaxHeader}
      renderParallaxForeground={this.renderParallaxForeground}
      parallaxBackgroundScrollSpeed={5}
      parallaxForegroundScrollSpeed={2.5}
    >
      {this.props.loading ? (
        <ActivityIndicator size="large" color="black" />
      ) :      (
      <View style={{ height: 1900, backgroundColor: 'white'}}>
      <Text>Title: {movie.title}</Text>
      <Text>Synopsis: {movie.overview}"</Text>
      <Text>Rating: {movie.vote_average}</Text>
      <Text>Release date: {movie.release_date}</Text>
      </View>)}
    </ParallaxScroll>
  
        //</SafeAreaView>
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
  title:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30
  },
  stickyHeader: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  foreground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
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
      loading: state.detailsReducer.loading,
      data: state.detailsReducer.data,
      error: state.detailsReducer.error,
      //user : state.session && state.session.user ? state.session.user : false
  }
}

export default connect(MapToStateProps,{getMovieDetails})(MovieDetail);