/** @format */

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { ScreenStyles } from "./styles";

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  let interval: NodeJS.Timer;

  const handelPage = () => {
    setPage((p: any) => p + 1);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`
      );
      //   console.log(res.data.hits);
      setData([...data, ...res.data.hits]);
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchData();
    console.log(page);
  }, [page]);

  useEffect(() => {
    interval = setInterval(handelPage, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View testID="home" style={ScreenStyles.screen}>
      <View style={ScreenStyles.item1}>
        <Text style={ScreenStyles.itemText1}>Title</Text>
        <Text style={ScreenStyles.itemText2}>URL</Text>
        {/* <Text style={ScreenStyles.itemText2}>Created_At</Text> */}

        <Text style={ScreenStyles.itemText1}>Author</Text>
      </View>
      <FlatList
        testID="home-list"
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={ScreenStyles.item}
              onPress={() => {
                navigation.navigate("Back", {
                  item: JSON.stringify(item, null, 4),
                });
              }}
            >
              <Text style={ScreenStyles.itemText1}>
                {item.title ? (
                  item.title
                ) : item.story_title ? (
                  item.story_title
                ) : (
                  <i>data not found</i>
                )}
              </Text>
              <Text style={ScreenStyles.itemText3}>
                {item.url ? (
                  <a href={item.url}>{item.url}</a>
                ) : item.story_url ? (
                  <a href={item.story_url}>{item.story_url}</a>
                ) : (
                  <i>data not found</i>
                )}
              </Text>
              {/* <Text style={ScreenStyles.itemText2}>{item.created_at}</Text> */}

              <Text style={ScreenStyles.itemText1}>{item.author}</Text>
            </TouchableOpacity>
          );
        }}
        onEndReachedThreshold={0.5}
        onEndReached={handelPage}
        // ListFooterComponent={() => {
        //   if (loading) {
        //     return <ActivityIndicator />;
        //   } else return <View />;
        // }}
      />
    </View>
  );
};

export default Home;
