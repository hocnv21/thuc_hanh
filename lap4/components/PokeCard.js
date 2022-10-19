//import React form react
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, Button } from "react-native";

import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
//Define your stateless componetns, and destrcuts props from function arguments

function PokeCard(props) {
  const { username } = props.data;
  const { index, onDelete, onUpdateApp } = props;

  return (
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
    marginBottom: 5,
    borderRadius: 10,
    flexWrap: "wrap",
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
