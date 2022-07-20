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
  const [loading, setloading] = useState<boolean>(false);

  const handelPage = () => {
    setPage((p: any) => p + 1);
  };

  const fetchData = async () => {
    try {
      setloading(true);
      const res = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`
      );
      //   console.log(res.data.hits);
      setData([...data, ...res.data.hits]);
    } catch (e) {
      console.log("error");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(page);
  }, [page]);

  useEffect(() => {
    interval = setInterval(() => handelPage(), 10000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      !loading && handelPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <View testID="home" style={ScreenStyles.screen}>
      <FlatList
        horizontal={false}
        testID="home-list"
        data={data}
        // keyExractor={(item:any)=>item.objectID}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              testID={`test-${item.index}`}
              style={ScreenStyles.item}
              key={item.objectID}
              onPress={() => {
                navigation.navigate("RAW JSON", {
                  item: JSON.stringify(item, null, 4),
                });
              }}
            >
              <Text style={ScreenStyles.itemText1}>
                <Text style={ScreenStyles.title}>Title: </Text>
                {item.title ? (
                  item.title
                ) : item.story_title ? (
                  item.story_title
                ) : (
                  <i>data not found</i>
                )}
              </Text>
              <Text style={ScreenStyles.itemText1}>
                <Text style={ScreenStyles.title}>URL: </Text>
                {item.url ? (
                  <a href={item.url}>{item.url}</a>
                ) : item.story_url ? (
                  <a href={item.story_url}>{item.story_url}</a>
                ) : (
                  <i>data not found</i>
                )}
              </Text>
              <Text style={ScreenStyles.itemText1}>
                <Text style={ScreenStyles.title}>Created_at: </Text>
                {item.created_at}
              </Text>

              <Text style={ScreenStyles.itemText1}>
                <Text style={ScreenStyles.title}>Author: </Text>
                {item.author}
              </Text>
            </TouchableOpacity>
          );
        }}
        onEndReachedThreshold={0.5}
        // onEndReached={handelPage}
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
