import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var styles = require('./Styles');
export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.headerContainer}>
          <Image source={{uri: this.props.article.ownerThumeUrl}} style={styles.headerImage} />
          <View style={styles.headerDesc}>
            <Text style={styles.headerWebsite}> {this.props.article.owner}</Text>
            <Text style={styles.headerPostedDate}>Posted:{this.props.article.postedDate}</Text>
          </View>
        </View>
    );
  }
}
module.exports=Header;
