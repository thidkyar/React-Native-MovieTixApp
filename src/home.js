import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View, StatusBar } from 'react-native';
import MoviesApi from "./moviesApi.js"

class Home extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
      };

  constructor(props) {
    super(props);
    this.state = {
        data: [],
        modalVisible: false,
    };
    
}
static navigationOptions = {
    tabBarLabel: 'Now Playing'
}
_fetchMovies = () => {
  let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=74bd71d1130d31841511eb1103ba1205"
  fetch(url)
      .then(res => res.json())
      .then(result => {
          let data = result.results
          this.setState({data: data})
      });
}


componentDidMount(){
  this._fetchMovies();
}

render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <MoviesApi data={this.state.data}/>
      </View>
    );
  }
}

export default Home;

const { width, height } = Dimensions.get('window');
const cols = 3, rows = 3;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', 
    flexDirection: 'row',
  },
});
