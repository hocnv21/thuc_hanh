import { Button, StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

export default function Cau1({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 20000,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Welcom to Animation react native!</Text>
      </Animated.View>
      <View>
        <Button
          onPress={() => navigation.navigate("Cau2")}
          title="Cau 2 >>>>>>>"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  fadingContainer: {
    padding: 40,
    height: 500,
  },
});
