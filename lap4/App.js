import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

//import your components

import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFont5 from "react-native-vector-icons/FontAwesome5";
import PokeCard from "./components/PokeCard";

//Export default the stateless component
function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://633e3080c235b0e575202bab.mockapi.io/dhktpm15a/android/api/v1/user"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function onDelete(id) {
    fetch(
      `https://633e3080c235b0e575202bab.mockapi.io/dhktpm15a/android/api/v1/user/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((result) => {
      result.json().then((res) => {
        console.log("delete");
        console.log(res);
      });
    });
  }
  function onUpdate(id, NewName) {
    fetch(
      `https://633e3080c235b0e575202bab.mockapi.io/dhktpm15a/android/api/v1/user/${id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: NewName,
        }),
      }
    ).then((result) => {
      result.json().then((res) => {
        console.log("update");
        console.log(res);
      });
    });
  }
  function onCreate(id, userName) {
    fetch(
      "https://633e3080c235b0e575202bab.mockapi.io/dhktpm15a/android/api/v1/user",
      {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
          id: id,
          username: userName,
        }),
      }
    ).then((result) => {
      result.json().then((res) => {
        console.log("create");
        console.log(res);
      });
    });
    setName("");
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          width: "100%",
          height: 100,
          borderRadius: 10,
          margin: 10,
          padding: 10,
          alignItems: "center",
          backgroundColor: "rgba(196, 196, 196, 0.41)",
        }}
      >
        <IconFont5
          size={50}
          color={"#3167D0"}
          name="walking"
          style={{ marginRight: 10 }}
        />
        <TextInput
          onChangeText={(newName) => setName(newName)}
          placeholder="The place that you will visit in the future"
        ></TextInput>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onCreate(Math.random(), name)}
          >
            <Text style={styles.textWhile}>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textWhile}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{ width: "100%" }}
          data={data}
          extraData={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item, index }) => (
            <PokeCard
              data={item}
              key={item.username}
              index={index}
              onDelete={() => onDelete(item.id)}
              onUpdateApp={() => onUpdate(item.id, name)}
            />
          )}
        />
      )}
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },

  textWhile: {
    color: "#ffff",
  },
  button: {
    backgroundColor: "#C94820",
    width: 150,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
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
    width: 15,
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
  header: {
    backgroundColor: "#555",
  },
});
