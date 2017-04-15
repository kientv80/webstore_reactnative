import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:4,
    marginBottom:10,
    backgroundColor:'white'
  },
  headerContainer:{
    height:40,
    flexDirection:'row',
    borderBottomColor:'#e1e2e3',
    borderBottomWidth:1
  },
  headerImage:{
    width:35,
    height:35,
    padding:4
  },
  headerDesc:{
    flex:1,
    padding:4,
  },
  headerWebsite:{
    flex: 2,
    color:'black',
    fontSize:10,
  },
  headerPostedDate:{
    flex: 3,
    color:'black',
    fontSize:10,
  }
  ,
  contentContainer:{
    flex:1,
    flexDirection:'row',
    paddingTop:4,
    paddingBottom:4
  },
  mainArticleContentContainer:{
    flex:1,
    paddingTop:4,
    paddingBottom:4
  },
  imageThume:{
    flex:1
  },
  articleTitle:{
    color:'black',
    fontWeight:'bold',
    fontSize:25,
  },
  articleContent:{
    flex:1,
    paddingLeft:4
  },
  footerContainer:{
    height:40,
    flexDirection:'row',
    backgroundColor:'grey'
  }
});
module.exports = styles;
