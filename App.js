import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getPlatformOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
// import { Counter } from '../AwesomeProject/src/components/counter';

export default class App extends React.Component {
  render() {
    
    return (
      <React.Fragment>
        <View style={styles.body}>
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
      </View>
    </React.Fragment>

    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "#f6f6fe",
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 70,
    marginTop: 90,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'space-between',
    alignContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    position: "relative",
    width: 140, 
    height: 140,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor: "#ffffff",
    shadowColor: '#C4C4FE',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49, 
    elevation: 12,
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
    marginTop: 15,
    marginLeft:15,
    alignContent: 'space-around',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardLeftColumnText: {
    width: 40,
  },
  textContainer: {
    position: 'relative',
    width: 80,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 11,
    fontSize: 18,
  },
  textSubContainer: {
    position: 'relative',
    width: 140,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 11,
    fontSize: 17,
  },
  cardRightCoulumnImg: {
    width:100,
    height:100,
  },
  imageContainer: {
    width: 85, 
    height: 75,
    marginTop:10,
    marginLeft: 56,
  },
  cardTopRow: {
    // backgroundColor: 'purple',
    flexDirection: 'row',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 80,
  },
  cardDownRow: {
    // backgroundColor: 'grey',
    // flexDirection: 'row',
    height: 60,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});