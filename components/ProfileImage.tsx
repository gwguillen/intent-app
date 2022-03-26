import React, { useState } from "react";
import { StyleSheet, View, Image, ImageSourcePropType} from "react-native";

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
            { profileImage.image ? (
                <Image
                    source={profileImage.image}
                    style={styles.profileimage}
                />
            ) : (
                <View style={styles.noimage}></View>
            )}
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
    noimage: {
      backgroundColor: "lightgray",
      height: 200,
      width: 110
    }
});


export { ProfileImage, RenderProfileImage };