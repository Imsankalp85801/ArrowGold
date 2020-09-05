import {View,TextInput, Button,TouchableOpacity, Alert,Linking,StyleSheet} from 'react-native';

import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


export function downloadFile(url,filename){

    let fileUri = FileSystem.documentDirectory + filename;
        
        FileSystem.downloadAsync(url, fileUri)
            .then(({ uri }) => {
                saveFile(uri);
            })
            .catch(error => {
                console.error(error);
            })

        async function saveFile (fileUri)  {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status === "granted") {
                const asset = await MediaLibrary.createAssetAsync(fileUri)
                await MediaLibrary.createAlbumAsync("Download", asset, false) 
                Alert.alert("Success", "File is successfully downloaded! \n to download Folder");
            
            }
        }
}