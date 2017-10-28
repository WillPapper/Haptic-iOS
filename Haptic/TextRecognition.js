import React from 'react';
import { StyleSheet, Text, Filesystem, NavigatorIOS, View, TouchableOpacity, Vibration, TouchableHighlight, Alert } from 'react-native';
import { Camera, Permissions } from 'expo';
import axios from 'axios';
import Tts from 'react-native-tts';

const height = '100%';
const width = '100%';

const CLOUD_VISION_API_KEY = 'AIzaSyCC9soywijHxqWN7JnRoK7hJBdeOpkllNg';
const cloudVisionUri = 'https://vision.googleapis.com/v1/images:annotate?key=' + CLOUD_VISION_API_KEY;

export default class TextRecognition extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {      
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  
  takePicture = async function() {
      if (this.camera) {
        
        this.camera.takePictureAsync({base64: true}).then((data) => {
          console.log('Took Photo')
          axios.post(cloudVisionUri, {
            "requests":[
              {
                "image":{
                  "content": data.base64
                },
                "features":[
                  {
                    "type":"TEXT_DETECTION",
                    "maxResults":1
                  }
                ]
              }
            ]
          })
          .then(function (response) {
            let firstResponse = response.data.responses[0];
            if (firstResponse) {
              let text = firstResponse.fullTextAnnotation.text;
              console.log('found text: ', text);
              Tts.speak(text);
            }
          })
          .catch(function (error) {
            console.log(error, "error");
          });
          Vibration.vibrate();
        });
      }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.takePicture.bind(this)}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Capture Photo{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
