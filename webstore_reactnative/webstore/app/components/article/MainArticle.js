import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var styles = require('./Styles');
var Header = require('./Header');
var Content = require('./Content');
export class MainArticle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <View style={styles.container}>
          <Header article={this.props.article}/>
          <View style={styles.mainArticleContentContainer}>
            <View style={{flex:1},{height:200}}>
              <Image source={{uri: this.props.article.articleThumeUrl}} style={styles.imageThume} />
            </View>
            <View style={{flex:1}}>
              <Content article={this.props.article}/>
            </View>
          </View>
        </View>
      );
    }
}
module.exports=MainArticle;
