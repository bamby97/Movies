import React, {Component} from 'react';
import {Stylesheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60
const { width: SCREEN_WIDTH } = Dimensions.get('screen')


class MovieDetail extends Component{
    constructor(){
        suoer();
        this.state={
            scrollY: new Animated.Value(0)
        }
    }
    render(){
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp'
          });
        const headerTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
          });
          const heroTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp'
          });
        return(
            <View style={styles.container}>
            <Animated.View style={[styles.header, { height: headerHeight }]}>
              <Animated.Text style={{textAlign: 'center', fontSize: 18, color: 'black', marginTop: 28, opacity: headerTitleOpacity}}>{headerTitle}</Animated.Text>
              <Animated.Text style={{textAlign: 'center', fontSize: 32, color: 'black', position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity}}>{headerTitle}</Animated.Text>
            </Animated.View>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              onScroll={Animated.event(
                [{ nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollY
                    }
                  }
                }])
              }
              scrollEventThrottle={16}>
              <Text style={styles.title}>This is Title</Text>
              <Text style={styles.content}>{str}</Text>
            </ScrollView>
          </View>
        )
      }
}

export default MovieDetail;