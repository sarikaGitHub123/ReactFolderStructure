import logo from './logo.svg';
import './App.css';

import react,{useState} from 'react';

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

import {nestedFolderStructure } from './Components/foldersJson';
import FolderStructure from './Components/FolderStructure';



function App() {


  return (
    <div>
     <p style={{paddingLeft:20,fontSize:20}}>Folder Structure</p>
     <FolderStructure FolderStructureData={nestedFolderStructure}/>
    </div>
  );
}

export default App;
