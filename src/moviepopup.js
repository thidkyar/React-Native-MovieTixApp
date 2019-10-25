import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

class MoviePopup extends Component {
  render() {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
            <View style={{marginTop: 22}}>
                <View>
                <Text>Hello World!</Text>
                <TouchableHighlight
                    onPress={()=>this.props._setModalVisible(false)}>
                    <Text>Hide Modal</Text>
                </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
  }
}

export default MoviePopup;