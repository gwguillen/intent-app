import React, { useState } from "react";
import { StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ProfileImageList from "../components/ProfileImageList";
import ImageUploader from "../components/ImageUploader";

export default function EditProfileScreen({ navigation }: RootTabScreenProps<'EditProfile'>) {
  const [image, setImage] = useState("");
  
  return (
    <ScrollView>
      {/* <ProfileImageList/> */}
      <View style={styles.profileImagesContainer}>
        <View style={styles.profileImagesRow}>
          <ImageUploader/>
          <ImageUploader/>
          <ImageUploader/>
        </View>
        <View style={styles.profileImagesRow}>
          <ImageUploader/>
          <ImageUploader/>
          <ImageUploader/>
        </View>
      </View>
      <View style={styles.myBioContainer}>
        <Text style={styles.profileSectionHeader}>My Bio</Text>
        <Text style={styles.myBioDesc}>Write your intro here.</Text>
        <TextInput 
          style={styles.myBioInput}
          multiline={true}
          placeholder="Talk about yourself a bit."
        />
        <Text style={styles.profileSectionHeader}>My Basics</Text>
        <Text style={styles.myBasicsSubHeading}>Job Title</Text>
        <TextInput 
          style={styles.myBasicsInput}
          placeholder="Add job title"
        />
        <Text style={styles.myBasicsSubHeading}>Company</Text>
        <TextInput 
          style={styles.myBasicsInput}
          placeholder="Add company"
        />
        <Text style={styles.myBasicsSubHeading}>School</Text>
        <TextInput 
          style={styles.myBasicsInput}
          placeholder="Add school"
        />
        <Text style={styles.myBasicsSubHeading}>Location</Text>
        <TextInput 
          style={styles.myBasicsInput}
          placeholder="Add city"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileImagesContainer:{
    flexDirection: "column",
    alignItems: "center"
  },
  profileImagesRow: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageUploader: {
    marginVertical: 8,
    marginHorizontal: 8
  },
  profileImage: {
    height: 200,
    width: 100
  },
  noImage: {
    backgroundColor: "lightgray",
    height: 200,
    width: 100
  },
  myBioContainer: {
    alignItems: "flex-start",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10
  },
  profileSectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10
  },
  myBioDesc: {
    fontSize: 12,
    paddingBottom: 4
  },
  myBioInput: {
    borderWidth: 1,
    borderRadius: 10,
    height: 80,
    maxHeight: 100,
    width: "100%",
    padding: 8,
    fontSize: 12,
    textAlignVertical: "top"
  },
  myBasicsSubHeading: {
    fontSize: 12,
    paddingTop: 4,
    paddingBottom: 4
  },
  myBasicsInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    height: 40,
    padding: 8
  }
});
