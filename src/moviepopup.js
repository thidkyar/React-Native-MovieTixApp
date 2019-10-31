import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Button, Image, StyleSheet, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

class MoviePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      overview: '',
      rating: '',
      release_date: ''
    };
}

  render() {
    return (
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.modalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
              <View style={styles.modal}>
              <StatusBar barStyle="light-content" />
                <Image key={this.props.movie_id} style={styles.image} source={{uri: this.props.movieData.image}}/>
                <Text style={styles.title}>{this.props.movieData.title}</Text>
                <Text style={styles.overview}>{this.props.movieData.overview}</Text>
                <Text style={{color:'gold'}}>{this.props.movieData.rating}</Text>
                <Text style={{color:'white'}}>{this.props.movieData.release_date}</Text>
                <Button onPress={()=>this.props._setModalVisible(false, this.props.movieData.movie_id)} title="Close"/>
              </View>
          </Modal>
    );
  }
}

export default MoviePopup;

const styles = StyleSheet.create({
  image: {
      width: 200,
      height: 300,
      margin: 10,
      borderRadius: 5,
  },
  closeButton: {
    flex: 1, 
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 20, 
    color:'white',
    fontWeight: '700',
    padding: 5
  },
  modal: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'black', 
    color:'white'
  },
  overview: {
    textAlign:'center', 
    color:'white',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5
  }
});