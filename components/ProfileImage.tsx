import React, { useState } from "react";
import { StyleSheet, View, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import ImageUploader from "./ImageUploader";

interface ProfileImage {
    id: string;
    image: ImageSourcePropType;
}

interface ProfileImageProps {
    profileImage: ProfileImage
}

const RenderProfileImage = ({ profileImage }: ProfileImageProps) => {
    return (
        <View style={styles.profileimagecontainer}>
            <ImageUploader/>
            {/* For testing with hardcoded images */}
            {/* { profileImage.image ? (
                <Image
                    source={profileImage.image}
                    style={styles.profileimage}
                />
            )*/}
        </View>
    );
};

const styles = StyleSheet.create({
    profileimagecontainer: {
      marginVertical: 8,
      marginHorizontal: 8
    },
    profileimage: {
      height: 200,
      width: 110
    },
    
});


export { ProfileImage, RenderProfileImage };