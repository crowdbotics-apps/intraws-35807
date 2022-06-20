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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a2121c4-121d-41ef-bdc6-cc61e868523b"
        }}
        style={styles.ImageBackground_35_116}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57c5d021-c2ff-4565-9cac-e5230034d698"
        }}
        style={styles.ImageBackground_35_117}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/490f565b-3666-4436-9d3c-8bd620fcc1ec"
        }}
        style={styles.ImageBackground_35_119}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55879eb2-9a31-4a28-a2c2-f3462c1d2753"
        }}
        style={styles.ImageBackground_35_120}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4a497d8-8833-4943-9b67-42d859453c3b"
        }}
        style={styles.ImageBackground_35_121}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f18b4fc8-bfcc-479f-9db1-db145ebf0ed9"
        }}
        style={styles.ImageBackground_35_129}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(25, 25, 27, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_35_116: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("55%"),
    resizeMode: "cover"
  },
  ImageBackground_35_117: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("55%"),
    resizeMode: "cover"
  },
  ImageBackground_35_119: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_35_120: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  ImageBackground_35_121: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  ImageBackground_35_129: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("55%"),
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
