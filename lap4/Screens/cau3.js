import { StyleSheet, Text, View, Animated, Image, Button } from "react-native";
import React, { useRef } from "react";

export default function cau3({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 10000,
    }).start();
  };
  const stop = () => {
    Animated.timing(fadeAnim, (useNativeDriver = true)).start({
      finished: true,
    });
  };
  const reset = () => {
    Animated.timing(
      fadeAnim,
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
      }).start()
    );
  };

  return (
    <View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            marginLeft: fadeAnim,
          },
        ]}
      >
        <Image style={styles.image} source={require("../assets/mb.png")} />
      </Animated.View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button title="Start" onPress={() => start()}></Button>
        <Button title="Stop" onPress={() => stop()}></Button>
        <Button title="Reset" onPress={() => reset()}></Button>
      </View>

      <View style={styles.btn}>
        <Button title="Cau 4 >>>>>>>>>>>>"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#ffff",
    padding: 20,
  },
  btn: {
    alignItems: "center",
    width: "100%",
    marginVertical: 30,
  },
  fadingContainer: {
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    marginVertical: 30,
  },
});
