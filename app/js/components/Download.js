
import React , {Fragment, useEffect, useState} from 'react';
import {View,TextInput, Button,TouchableOpacity, Alert,Linking,StyleSheet} from 'react-native';
import { Avatar, Divider, Icon, Overlay } from 'react-native-elements';
import QText from '../components/QText';
import QButton from '../components/QButton';
import { undefinedOrNull,notUndefinedAndNull } from "../utils/Validation";
import * as download from '../utils/DownloadFile';



export default function Download(props){

    function onClickDownload(){

        let {downloadable, url,filename} = props;

        if(undefinedOrNull(downloadable)){
            downloadable = true;
        }
       
        if(downloadable) {
            download.downloadFile(url,filename)    
        } 
        else{
            props.onClickDownload()
        }    
    }


   function getFileSize(){
        if(props.filesize){
            return filesize;
        }
        return "Unknown MB";
    }


    function getIcon(){
        let {filename} = props;
        let type =(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;        
        switch(type){

            case "docx":
              return "qicon-doc"
            case "xlsx":
              return "qicon-export_table_to_excel";
            case "pdf":
              return "qicon-pdf";
            case "jpg":
              return "qicon-jpg";
            case "pptx":
              return "qicon-ppt";
            default:
              return "qicon-pdf";
          }


    }

    function renderDownloadIcon(){

        return(
            <TouchableOpacity onPress={()=>onClickDownload()}>
                <Icon name='download' type='antdesign' size={20} color='#F3773A' containerStyle={{ marginTop: 5}}  />
            </TouchableOpacity>
        )
    }


    function renderDownloadWithFile(){

        let {onlyIcon,renderButton,renderText} = props;

        if(onlyIcon){
            return null;
        }

        if(renderButton){
            return null
        }

        if(renderText){
            return null
        }

        return(
            <View style={downloadStyles.header} >
                <View style={downloadStyles.containHeader}>
                    <QText style={downloadStyles.name} numberOfLines={2} ellipsizeMode='tail' >{props.filename}</QText>
                    <QText style={downloadStyles.size}>{getFileSize()}</QText>
                </View>
                {renderDownloadIcon()}
            </View>
        )
    }

    function renderOnlyIcon(){
        let {onlyIcon,renderButton,renderText} = props;

        if(renderButton){
            return null
        }

        if(renderText){
            return null
        }
        
        
        if(onlyIcon){
            return(
                <View style={downloadStyles.rightSide}>
                    {renderDownloadIcon()}
                </View>
            )
        }
    }

    function renderOnlyText(){
        let {onlyIcon,renderButton,renderText} = props;

        if(renderButton){
            return null
        }

        if(onlyIcon){
            return null
        }
        
        if(renderText){
            return(
                <View>
                 <TouchableOpacity onPress={()=>onClickDownload()}>
                  <QText fontWeight='bold' fontSize='medium' style={downloadStyles.defaulterText}>
                     {props.textName}
                  </QText>
                 </TouchableOpacity>
                </View>
            )
        }
    }

    function renderButton(){
        if(notUndefinedAndNull(props.renderButton)){
            return(
               <QButton 
                    title={props.buttonTitle} 
                    onPress={()=>onClickDownload()}
                /> 
            )
        }
    }





        return(
            <Fragment>
                {(notUndefinedAndNull(props.downloadButton) ? onClickDownload() :
                    <Fragment>
                        {renderDownloadWithFile()} 
                        {renderOnlyIcon()}
                        {renderButton()}
                        {renderOnlyText()}
                    </Fragment>
                 )}
            </Fragment>
        )    
    
}

const downloadStyles = StyleSheet.create({
  
    header:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    containHeader: {
        flexDirection:'column',
     },
    name:{
        fontFamily:'ssp-regular',
        fontStyle:"normal",
        fontSize: 16,
        width:220,
        marginLeft:5
    },
    size:{
        fontFamily:'ssp-regular',
        fontStyle:"normal",
        fontSize: 12, 
        marginLeft:5

    },
    rightSide:{
        marginLeft:'auto'
    },
    defaulterText:{
        marginTop:10,marginLeft:20,color:"#f79921",alignSelf:"center",marginBottom:10
      }
  });
