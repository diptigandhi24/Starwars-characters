import { useState,useEffect } from "react";
import apiCall from "../api/api";

export default function CharactersList(){
    const [characterList , updateCharaterList] = useState([]);
    useEffect(()=>{
      
      apiCall()
      .then((data)=> updateCharaterList(data.results))
  })
    return<ul>
        {
            characterList. map((info:any)=> <li>{info.name}</li>)
        }
    </ul>

    
}