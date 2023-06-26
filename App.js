import { useState } from "react";
import {  FlatList, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/Division";
import FriendList from "./src/FriendList";
import FriendSection from "./src/FriendSection";
import Header from "./src/Header";
import Margin from "./src/Margin";
import Profile from "./src/Profile";
import TabBar from "./src/TabBar";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

import styled from 'styled-components/native'

const StatusBarHeight = getStatusBarHeight(true);
const BottomSpace = getBottomSpace();

console.log(`${Platform.OS} : ${StatusBarHeight}, ${BottomSpace}`)

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }
  const ItemSeparatorComponent = () => <Margin height={13}/>
  const renderItem = ({ item }) => (
    <View>
      <Profile
          uri={item.uri}
          name={item.name}
          introduction ={item.introduction}
      />
  </View>
  )

  const ListHeaderComponent = () => (
    <View style={{backgroundColor:"white"}}>
      <Header/>
          <Margin height={10}/>
          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction ={myProfile.introduction}
            isMe={true}
          />
          <Margin height={15}/>
          <Division/>
          <Margin height={12}/>
          <FriendSection 
            friendProfileLen={friendProfiles.length}
            onPressArrow = {onPressArrow}
            isOpened = {isOpened}
            isMe={false}
          />
      </View>
  )

  // const ListFooterComponent = () => null

  return (
    <View style={styles.container}>
      <FlatList
        data = {isOpened ? friendProfiles : []}
        contentContainerStyle ={{paddingHorizontal:15}}
        keyExtractor={(_, index) => index}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        // ListFooterComponent={ListFooterComponent}
      />
      <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
    </View>
  )

  // return (
  //   <View style={styles.container}>
  //     <View style={{
  //       flex:1, 
  //       paddingHorizontal:15,
  //       }}>
  //       <Header/>
  //       <Margin height={10}/>
  //       <Profile
  //         uri={myProfile.uri}
  //         name={myProfile.name}
  //         introduction ={myProfile.introduction}

  //       />
  //       <Margin height={15}/>
  //       <Division/>
  //       <Margin height={12}/>
  //       <FriendSection 
  //         friendProfileLen={friendProfiles.length}
  //         onPressArrow = {onPressArrow}
  //         isOpened = {isOpened}
  //       />
  //       <FriendList
  //         isOpened = {isOpened}
  //         data={friendProfiles}
  //       />
    // </View>
    // <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
    // </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : StatusBarHeight,
    paddingBottom : BottomSpace,
  
  },
});
