// @flow

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image
} from "react-native";
import ImageItem from "./components/ImageItem";

import posts from "./data/posts";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            marginVertical: 18,
            fontSize: 25,
            color: "#333"
          }}
        >
          Open-talk Demo
        </Text>
        <FlatList
          data={posts}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={row => {
            return <ImageItem item={row.item} />;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: 42
                }}
              />
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
