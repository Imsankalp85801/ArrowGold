import React from 'react';
import QText from "./QText";


export default function Currency(props){
    if(props.currency === "rupee"){
        return (<QText>&#x20b9;</QText>)
    }else{
        return null;
    }

}