import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var styles = require('./Styles');
export class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.articleContent}>
          <Text style={styles.articleTitle}>{this.props.article.title}</Text>
          <Text>
            {this.props.article.shortDes}
          </Text>
        </View>
    );
  }
}
module.exports=Content;
