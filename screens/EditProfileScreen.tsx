import React, { useState } from "react";
import { StyleSheet, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ProfileImageList from "../components/ProfileImageList";

export default function EditProfileScreen({ navigation }: RootTabScreenProps<'EditProfile'>) {
  const [image, setImage] = useState("");
  //TODO: Create component for profile images
  return (
    <View style={styles.container}>
      <ProfileImageList/>
      {/* <Image
        resizeMode="cover"
        source={require("../assets/images/grant-motorcycle.jpg")}
        style={styles.profileimage}
      />
      <Image
        resizeMode="cover"
        source={require("../assets/images/grant-motorcycle.jpg")}
        style={styles.profileimage}
      /> */}
      {/* <Image
        resizeMode="cover"
        source={require("../assets/images/grant-motorcycle.jpg")}
        style={styles.profileimage}
      /> */}
      {/* <View style={styles.noimage}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly'
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
