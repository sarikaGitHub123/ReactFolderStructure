import react, { useEffect, useState } from 'react';

import { FaAngleRight, FaAngleDown, FaRegFileLines, FaFolderPlus, FaPenToSquare, FaTrashCan, FaFileMedical } from "react-icons/fa6";
import { isObject } from './CommonFunctions';
import { logoStyle, titleLogo,indendation,logoContainer } from './FolderStructureStyles';



const FolderStructure = (props) => {

  const { FolderStructureData } = props
  const [folderStructure, setFolderStructure] = useState(FolderStructureData)
  const [openFolders, setOpenFolders] = useState([])
  const [showInputBox, setShowInputBox] = useState('')
  const [selectedData, setSelectedData] = useState(null)
  const [typeToAdd, setTypeToAdd] = useState(null)
  // key of a component
  const [keyOfComp, setKeyOfComp] = useState(true)

  const onFolderClick = (val) => {
    let data = [...openFolders]
    if (data.includes(val)) {
      let index = data.findIndex((e) => e == val)
      data.splice(index, 1)
      setOpenFolders(data)
    }
    else {
      setOpenFolders(prev => [...prev, val])
    }
  }

  const onAddEditClick = (e, val, type) => {
    e.stopPropagation();
    setSelectedData(val)
    setShowInputBox(val)
    setTypeToAdd(type)

    // changing key of a component to re-render the component
    setKeyOfComp(!keyOfComp)
  }


  const onAddEdit = (e) => {
    let added = e.target.value
    if (e.keyCode === 13 && e.target.value) {
      setShowInputBox('')
      if (typeToAdd == 'rename') {
        EditObjectKey(folderStructure, selectedData, added)
      }
      else {
        updateObjectKey(folderStructure, selectedData, added)
      }
      setFolderStructure(folderStructure)
      // changing key of a component to re-render the component
      setKeyOfComp(!keyOfComp)
    }
  }

  const onDelete = (e, key) => {
    e.stopPropagation();
    deleteObjectKey(key, folderStructure)
    setFolderStructure(folderStructure)
    setKeyOfComp(!keyOfComp)
  }

  function updateObjectKey(obj, key, newValue) {
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        if (k === key) {
          if (isObject(obj[k]) && obj[k] != null) {
            let o = { ...obj[k] }
            obj[k] = typeToAdd == 'folder' ? { ...o, [newValue]: {} } : { ...o, [newValue]: 'file' }
          }
          else if (Array.isArray(obj[k]) && obj[k] != null) {
            let a = [...obj[k]]
            let valuToadd = typeToAdd == 'folder' ? { [newValue]: {} } : newValue
            a.push(valuToadd)
            obj[k] = a
          }
          else {
            let valuToadd = typeToAdd == 'folder' ? { [newValue]: {} } : newValue
            obj[k] = valuToadd
          }
        }
        else if (typeof obj[k] === 'object' && obj[k] !== null) {
          updateObjectKey(obj[k], key, newValue); // Recurse deeper
        }
      }
    }
  }

  function EditObjectKey(obj, key, newValue) {
    console.log('UpdatedObjectedited', obj)
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        if (k === key) {
          // .. this method will change the key but dosent preserve the position of the key in object
          // obj[newValue] = obj[key]
          // delete obj[key];

          // value for edited key
          let value = obj[key]
          const keys = Object.keys(obj);
          const index = keys.indexOf(key);
          // created new object
          const newObj = {};
          // assign all values before that key in new object
          for (let i = 0; i < index && i < keys.length; i++) {
            newObj[keys[i]] = obj[keys[i]];
          }
          // assigned oldKey value to new value
          newObj[newValue] = value;
          for (let i = index; i < keys.length; i++) {
            newObj[keys[i]] = obj[keys[i]];
          }

          // delete old key
          delete newObj[key]
          // remove all old keys of original object
          Object.keys(obj).forEach(k => delete obj[k]);

          // assigns all keys of new object to original object
          Object.keys(newObj).forEach(k => obj[k] = newObj[k]);
        }
        // recursion until to find nested keys
        else if (typeof obj[k] === 'object' && obj[k] !== null) {
          EditObjectKey(obj[k], key, newValue);
        }
      }
    }
  }

  function deleteObjectKey(key, obj) {
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        if (k === key) {
          delete obj[key];
        }
        // recursion to find nested key
        else if (typeof obj[k] === 'object' && obj[k] !== null) {
          deleteObjectKey(key, obj[k]);
        }
      }
    }
  }

  return (
    <div key={keyOfComp} style={{paddingInlineStart:15}}>
      {Object.keys(folderStructure).map((i, index) =>
        <div key={index}>
          {(Array.isArray(folderStructure[i]) || isObject(folderStructure[i])) ?
            <>
              <div onClick={() => onFolderClick(i)} style={titleLogo}>
                {openFolders.includes(i) ? <FaAngleDown /> : <FaAngleRight />}
                <p>{i}</p>
                {openFolders.includes(i) &&
                  <div style={logoContainer}>
                    <FaFolderPlus onClick={(e) => onAddEditClick(e, i, 'folder')} style={logoStyle} />
                    <FaFileMedical onClick={(e) => onAddEditClick(e, i, 'file')} style={logoStyle} />
                    <FaPenToSquare onClick={(e) => onAddEditClick(e, i, 'rename')} style={logoStyle} />
                    <FaTrashCan onClick={(e) => onDelete(e, i)} style={logoStyle} />
                  </div>
                }
              </div>
              {(showInputBox == i) &&
                <input
                  type="text"
                  autoFocus
                  onKeyDown={(e) => onAddEdit(e)}
                  onBlur={() => setShowInputBox(false)}
                />
              }
            </>
            :
            <>
              <div onClick={() => onFolderClick(i)} style={titleLogo}>
                <FaRegFileLines />
                <p>{i}</p>
                <div style={logoContainer}>
                <FaPenToSquare onClick={(e) => onAddEditClick(e, i, 'rename')} style={logoStyle} />
                <FaTrashCan onClick={(e) => onDelete(e, i)} style={logoStyle} />
                  </div>
              </div>
              {(showInputBox == i) &&
                <input
                  type="text"
                  autoFocus
                  onKeyDown={(e) => onAddEdit(e)}
                  onBlur={() => setShowInputBox(false)}
                />
              }
            </>
          }
          {Array.isArray(folderStructure[i]) &&
            <>
              {openFolders.includes(i) &&
                <div style={indendation}>
                  {folderStructure[i].map((file, IN) =>
                    <div key={IN}>
                      {(!Array.isArray(file) && !isObject(file)) ?
                        <div onClick={() => onFolderClick(i)} style={titleLogo}>
                          <FaRegFileLines />
                          <p>{file}</p>
                          <div style={logoContainer}>
                            <FaPenToSquare onClick={(e) => onAddEditClick(e, file, 'rename')} style={logoStyle} />
                            <FaTrashCan onClick={(e) => onDelete(e, file)} style={logoStyle} />
                          </div>
                        </div>
                        :
                        <>
                          {isObject(file) && Object.keys(file).map((objKey, INo) =>
                            <div key={INo}>
                              <div onClick={() => onFolderClick(objKey)} style={titleLogo}>
                                <FaAngleRight />
                                <p>{objKey}</p>
                                {openFolders.includes(objKey) &&
                                  <div style={logoContainer}>
                                    <FaFolderPlus onClick={(e) => onAddEditClick(e, objKey, 'folder')} style={logoStyle} />
                                    <FaFileMedical onClick={(e) => onAddEditClick(e, objKey, 'file')} style={logoStyle} />
                                    <FaPenToSquare onClick={(e) => onAddEditClick(e, objKey, 'rename')} style={logoStyle} />
                                    <FaTrashCan onClick={(e) => onDelete(e, objKey)} style={logoStyle} />
                                  </div>
                                }
                              </div>
                              {(showInputBox == objKey) &&
                                <input
                                  type="text"
                                  autoFocus
                                  onKeyDown={(e) => onAddEdit(e)}
                                  onBlur={() => setShowInputBox(false)}
                                />
                              }
                              {openFolders.includes(objKey) &&
                                <div style={indendation}>
                                  {!Array.isArray[file[objKey]] && !isObject(file[objKey]) &&
                                    <span>{file[objKey]}</span>
                                  }
                                  {isObject(file[objKey]) &&
                                    <>
                                      {openFolders.includes(objKey) &&
                                        <div style={indendation}>
                                          <FolderStructure FolderStructureData={file[objKey]} />
                                        </div>
                                      }
                                    </>
                                  }
                                </div>
                              }

                            </div>
                          )}
                        </>
                      }
                    </div>
                  )}
                </div>
              }
            </>
          }
          {isObject(folderStructure[i]) &&
            <>
              {openFolders.includes(i) &&
                <div style={indendation}>
                  {/* recursively called same component foe nested object */}
                  <FolderStructure FolderStructureData={folderStructure[i]} />
                </div>
              }
            </>
          }
        </div>
      )}
    </div>
  )
}


export default FolderStructure