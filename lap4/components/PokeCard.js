//import React form react
import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Button,
  Animated,
  Dimensions,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
//Define your stateless componetns, and destrcuts props from function arguments

const SCREEN_WIDTH = Dimensions.get("window").width;
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 40;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

function PokeCard(props) {
  const { username } = props.data;
  const { index, onDelete, onUpdateApp, Yscroll } = props;

  const scale = Yscroll.interpolate({
    inputRange: [-1, 0, sizeOfItem * index, sizeOfItem * (index + 2)],
    outputRange: [1, 1, 1, 0],
  });
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      style={[
        styles.item,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <Swipeable renderLeftActions={leftSwipe}>
        <View style={styles.row}>
          <View style={styles.col1}>
            <Text>{index + 1}</Text>
            <Text>.</Text>
          </View>
          <View style={styles.col2}>
            <Text>{username}</Text>
          </View>
          <View style={styles.col3}>
            <View style={{ marginHorizontal: 20 }}>
              <Icon.Button
                onPress={() => onUpdateApp()}
                name="edit"
                backgroundColor={"#EC6418"}
              ></Icon.Button>
            </View>
            <View>
              <Icon.Button
                onPress={() => onDelete()}
                name="remove"
                backgroundcolor={"#E73434"}
              ></Icon.Button>
            </View>
          </View>
        </View>
      </Swipeable>
    </Animated.View>
  );
}
export default PokeCard;
const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(111, 189, 161, 0.7)",
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    flexWrap: "wrap",
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 80,
  },
  col1: {
    width: 20,
    flexDirection: "row",
  },
  col2: {
    flexGrow: 1,
  },
  col3: {
    flexDirection: "row",
    marginHorizontal: 5,
    width: 150,

    justifyContent: "flex-end",
  },
});
