import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Counter } from '../AwesomeProject/src/components/counter';

export default class App extends React.Component {
  render() {
    
    return (
      <React.Fragment>

      <View style={styles.container}>

        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={styles.cardLeftColumnText}>
              <Text style={styles.counterContainer}>99</Text>
            </View>
            <View style={styles.cardRightCoulumnImg}>
              <Image style={styles.imageContainer} source={require("./assets/img/nintendoswitch.png")} />
            </View>
          </View>
          <View style={styles.cardDownRow}>
            <Text style={styles.textContainer}>Nintendo</Text>
            <Text style={styles.textSubContainer}>Switch</Text>
          </View>
        </View>

        <View style={styles.card}> 
          <Text style={styles.counterContainer}>5</Text>
          <Text style={styles.textContainer}>Sony</Text>
          <Text style={styles.textSubContainer}>PlayStation 4</Text>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={styles.cardLeftColumnText}>
              <Text style={styles.counterContainer}>99</Text>
            </View>
            <View style={styles.cardRightCoulumnImg}>
              <Image style={styles.imageContainer} source={require("./assets/img/xboxone.png")} />
            </View>
          </View>
          <View style={styles.cardDownRow}>
            <Text style={styles.textContainer}>Microsoft</Text>
            <Text style={styles.textSubContainer}>Xbox One</Text>
          </View>
        </View>

        <View style={styles.card}> 
          <Text style={styles.counterContainer}>24</Text>
          <Text style={styles.textContainer}>Nintendo</Text>
          <Text style={styles.textSubContainer}>GB Advance</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTopRow}>
            <View style={styles.cardLeftColumnText}>
              <Text style={styles.counterContainer}>22</Text>
            </View>
            <View style={styles.cardRightCoulumnImg}>
              <Image style={{ width: 87, height: 80, marginTop:24, marginLeft: 55,}} source={require("./assets/img/mouse.png")} />
            </View>
          </View>
          <View style={styles.cardDownRow}>
            {/* <Text style={styles.textContainer}>Nintendo</Text> */}
            <Text style={styles.textSubContainer}>PC</Text>
          </View>
        </View>

      </View>
    
    </React.Fragment>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'space-between',
    alignContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    position: "relative",
    width: 140, 
    height: 160,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 25,
  },
  counterContainer: {
    position: "relative",
    width: 45, 
    height: 30,
    borderWidth: 1,
    borderColor: '#373E91',
    color: '#373E91',
    borderRadius: 15,
    padding: 5,
    marginTop: 13,
    marginLeft:13,
    alignContent: 'space-around',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardLeftColumnText: {
    width: 40,
  },
  textContainer: {
    // flexDirection: 'row',
    position: 'relative',
    width: 80,
    // height:20,
    fontWeight: 'bold',
    color: '#373E91',
    // marginBottom: 13,
    marginLeft: 8,
    // textAlignVertical: 'bottom',
    fontSize: 18,
  },
  textSubContainer: {
    // flexDirection: 'row',
    position: 'relative',
    width: 140,
    // height:20,
    fontWeight: 'bold',
    color: '#373E91',
    // marginBottom: 13,
    marginLeft: 8,
    // textAlignVertical: 'bottom',
    fontSize: 18,
  },
  cardRightCoulumnImg: {
    width:100,
    height:100,
  },
  imageContainer: {
    width: 100, 
    height: 90,
    marginTop:12,
    marginLeft: 48,
  },
  cardTopRow: {
    // backgroundColor: 'purple',
    flexDirection: 'row',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 100,
  },
  cardDownRow: {
    // backgroundColor: 'grey',
    // flexDirection: 'row',
    height: 60,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});