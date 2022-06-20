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
      <View style={styles.View_35_136}>
        <Text style={styles.Text_35_136}>􀎟</Text>
      </View>
      <View style={styles.View_35_137}>
        <Text style={styles.Text_35_137}>􀵩</Text>
      </View>
      <View style={styles.View_35_139}>
        <Text style={styles.Text_35_139}>􀏮</Text>
      </View>
      <View style={styles.View_35_140}>
        <Text style={styles.Text_35_140}>􀁹</Text>
      </View>
      <View style={styles.View_35_141}>
        <Text style={styles.Text_35_141}>􀰌</Text>
      </View>
      <View style={styles.View_35_142}>
        <Text style={styles.Text_35_142}>􀌇</Text>
      </View>
      <View style={styles.View_35_143}>
        <Text style={styles.Text_35_143}>􀊄</Text>
      </View>
      <View style={styles.View_35_144}>
        <Text style={styles.Text_35_144}>􀅼</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(25, 25, 27, 1)" },
  View_2: { height: hp("100%") },
  View_35_136: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_35_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.023181816563010216,
    textTransform: "none"
  },
  View_35_137: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_35_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.023181816563010216,
    textTransform: "none"
  },
  View_35_139: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_35_139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.023181816563010216,
    textTransform: "none"
  },
  View_35_140: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_35_140: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.023181816563010216,
    textTransform: "none"
  },
  View_35_141: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_35_141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_35_142: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_35_142: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_35_143: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("58%"),
    justifyContent: "center"
  },
  Text_35_143: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_35_144: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("54%"),
    justifyContent: "center"
  },
  Text_35_144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.023181816563010216,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
