import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class MoviesApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            titles: [],
        };
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

    _showMovies = () => {
        this.state.data.map(items => {
            return (
                <Text>{items.original_title}</Text>
            )
        })
    }

    componentDidMount(){
        this._fetchMovies();
      }
    render() {
        return (
            <View >
                <ScrollView>
                    {this.state.data.map((movie, index) => <Text key={index}>{movie.original_title}</Text>)}
                </ScrollView>
            </View>
        );
    }
}

export default MoviesApi;
