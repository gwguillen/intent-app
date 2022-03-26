import React, { useState } from "react";
import { StyleSheet, View, Image, FlatList, ListRenderItem} from "react-native";
import { ProfileImage, RenderProfileImage} from "./ProfileImage";
import imageDB from "../TestImageDB";

export default function ProfileImageList() {
    const [profileImageList, setProfileImageList] = useState<ProfileImage[]>(imageDB);

    const profileImage: ListRenderItem<ProfileImage> = ({ item }) => (
      <RenderProfileImage profileImage={item}></RenderProfileImage>
    );

    return (
        <View style={styles.container}>
            <FlatList
              data={profileImageList}
              keyExtractor={(item) => item.id}
              renderItem={profileImage}
              numColumns={3}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  profileimage: {
    height: 200,
    width: 100
  },
  noimage: {
    backgroundColor: "lightgray",
    height: 200,
    width: 100
  }
});