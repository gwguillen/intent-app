import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { FontAwesome } from '@expo/vector-icons';

export default function ImageUploader() {
    const [image, setImage] = useState("");
    
    //Request camera roll permissions
    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        })();
      }, []);
    
    const uploadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
          });
      
          if (!result.cancelled) {
            var resizedImage = await ImageManipulator.manipulateAsync(
              result.uri,
              [{ resize: { width: 50, height: 50 } }],
              { base64: true }
            );
            var imageBase64 = resizedImage.base64 ?? "";
            setImage(result.uri);
          }
    }
    
    return (
        <View>
            
            { image ? (
                <TouchableOpacity onPress={uploadImage}>
                    <Image 
                        resizeMode="cover"
                        source={{ uri: image }}
                        style={styles.avatarBig}
                    />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={uploadImage} style={styles.noimage}>
                    <FontAwesome
                        name="plus"
                        size={20}
                        color="#319ECD"
                    />
                </TouchableOpacity>
            )}
        </View>
        
            
    );
}

const styles = StyleSheet.create({
    noimage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        height: 200,
        width: 110,
        borderRadius: 10,
    },
    avatarBig: {
        height: 200,
        width: 110,
        borderRadius: 10,
        marginTop: 15,
        alignSelf: "center",
    }
});