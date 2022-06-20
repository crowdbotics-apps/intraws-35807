import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b5981ce-0b12-42a5-9b5a-1cd1ca0fce55"
        }}
        style={styles.ImageBackground_35_123}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4b543d8-ff1b-4422-b941-463d072fc533"
        }}
        style={styles.ImageBackground_35_124}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9b161cc-bd33-4a17-87f4-9a46d5a1dd05"
        }}
        style={styles.ImageBackground_35_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bc2f5da-7f62-4d51-9b5e-8415a3e7ac1e"
        }}
        style={styles.ImageBackground_35_126}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(25, 25, 27, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_35_123: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  ImageBackground_35_124: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("15%"),
    resizeMode: "cover"
  },
  ImageBackground_35_125: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("60%"),
    resizeMode: "cover"
  },
  ImageBackground_35_126: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("58%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
