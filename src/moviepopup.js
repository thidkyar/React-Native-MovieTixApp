import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Button, Image, StyleSheet} from 'react-native';

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
      <View style={{maxHeight: 50}}>
          <Modal
            backgroundColor='#DDDDDD'
            animationType="slide"
            transparent={false}
            visible={this.props.modalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
              <View style={{marginTop: 22, marginLeft: 10}}>
                <Image key={this.props.movie_id} style={styles.image} source={{uri: this.props.movieData.image}}/>
                <Text>{this.props.movieData.title}</Text>
                <Text>{this.props.movieData.overview}</Text>
                <Text>{this.props.movieData.rating}</Text>
                <Text>{this.props.movieData.release_date}</Text>
                <Button onPress={()=>this.props._setModalVisible(false, this.props.movieData.movie_id)} title="Hide page"/>
              </View>
          </Modal>
        </View>
    );
  }
}

export default MoviePopup;

const styles = StyleSheet.create({
  image: {
      width: 100,
      height: 200,
      margin: 10,
      borderRadius: 5,
  }
});