import React, { Component } from "react";
import { Dimensions,StyleSheet, Text, View, ScrollView, Image,TouchableOpacity } from 'react-native';
import MoviePopup from '../src/moviepopup.js'

class MoviesApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this._setModalVisible = this._setModalVisible.bind(this)
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {this.props.data.map((movie, index) => {
                        let image = "https://image.tmdb.org/t/p/w200"+ movie.poster_path;
                        return (
                            <TouchableOpacity key={movie.id} style={styles.content} onPress={() => {
                                this._setModalVisible(true);
                              }}>
                                <View key={movie.uniqueId} style={{flex: 1}}>
                                    <Image key={movie.uniqueId} style={styles.image} source={{uri: image}}/>
                                    <Text key={movie.uniqueId} numberOfLines={1} style={styles.title}>{movie.original_title}</Text>
                                    <Text key={movie.uniqueId} style={styles.genre}>{movie.vote_average}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    <MoviePopup modalVisible={this.state.modalVisible} _setModalVisible={this._setModalVisible} data={this.props.data}/>
                </ScrollView>
        );
    }
}

export default MoviesApi;

const { width, height } = Dimensions.get('window');
const cols = 3, rows = 3;
const styles = StyleSheet.create({
    scrollContent: {
      flexDirection: 'row',   // arrange posters in rows
      flexWrap: 'wrap',       // allow multiple rows
    },
    image: {
        width: 100,
        height: 200,
        margin: 10
    },
    content: {
        height: (height - 20 - 20) / rows - 10,
        width: (width - 10) / cols - 10,
        marginLeft: 10,
        marginBottom: 10,
    },
    genre: {
        color: '#BBBBBB',
        fontSize: 12,
        lineHeight: 14,
    },
    title: {
        color: 'white',
        fontSize: 14,
        marginTop: 4,
    }
  });