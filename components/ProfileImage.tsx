import React, { useState } from "react";
import { StyleSheet, View, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';


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
                <View style={styles.noimage}>
                    <TouchableOpacity style={styles.plusiconcontainer}>
                        <Entypo name="plus" size={30} color="#319ECD"/>
                    </TouchableOpacity>
                </View>
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
    },
    plusiconcontainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});


export { ProfileImage, RenderProfileImage };