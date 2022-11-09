import { StyleSheet, Text, View, Animated, Image, Button } from "react-native";
import React, { useRef } from "react";

export default function Cau2({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const flight = () => {
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 10000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            marginLeft: fadeAnim,
          },
        ]}
      >
        <View style={styles.image}></View>
      </Animated.View>

      <View style={styles.btn}>
        <Button title="start" onPress={() => flight()}></Button>
      </View>

      <View style={{ width: "100%", marginVertical: 50 }}>
        <Button
          onPress={() => navigation.navigate("Cau3")}
          title="Cau 3 >>>>>>>>>>>>>>>>>"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 20,
  },
  btn: {
    alignItems: "center",
    width: "100%",
    marginVertical: 30,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
});
