/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  ActivityIndicator
} from 'react-native';

var Article = require('./app/components/article/Article');
var MainArticle = require('./app/components/article/MainArticle');
export default class webstore extends Component {
  constructor(props){
    super(props);
    let articles=[
                  {ownerThumeUrl:'https://facebook.github.io/react/img/logo_og.png', owner:'tuoitre.vn1',postedDate:'1/1/2016 8:20',title:'Welcome to react!',shortDes:'React native is a moden frame work nowaday. bala bala',articleThumeUrl:'https://facebook.github.io/react/img/logo_og.png'},
                 ];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let dataSource = ds.cloneWithRows(articles);
    this.state = {dataSource:dataSource};
  }
  render() {
    this.fetchData();
    return (
      <ListView dataSource={this.state.dataSource}
                renderRow={(rowData) =><Article article={rowData}/>}
                initialListSize={5}
                onEndReachedThreshold={1000}
                onEndReached={this.onEndReached()}
      />
    );
  }
  onEndReached() {
    alert("onEndReached");
    /*
      if (!this.state.waiting) {
          this.setState({waiting: true});
          this.fetchData() // fetching new data, ended with this.setState({waiting: false});
      }
      */
  }

  renderFooter() {
      if (this.state.waiting) {
          return <ActivityIndicator />;
      } else {
          return <Text>~</Text>;
      }
  }

 fetchData(){
    alert("fetchData");
    fetch('http://360hay.com/getupdate',{method:'GET'})
    .then((response) => response.json())
    .then((responseJson) => {
        let articles = [];
        for(i=0;i<responseJson.length;i++){
          let article={};
          let data = responseJson[i];
          article.owner=data.from;
          article.ownerThumeUrl='https://facebook.github.io/react/img/logo_og.png';
          article.postedDate=data.date;
          article.title=data.title;
          article.shortDes=data.message;
          article.articleThumeUrl=data.themeUrl;
          articles[i]=article;
        };
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(articles);
        this.setState({dataSource:dataSource});
        this.setState({waiting: true});
      })
      .catch((error) => {
        alert(error);
      });
  }

}

AppRegistry.registerComponent('webstore', () => webstore);
