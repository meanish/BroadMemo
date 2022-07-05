import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from "@mui/icons-material/Add";
import "./App.scss";
import Input from "@mui/material/Input";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Todoadv() {
  const ariaLabel = { "aria-label": "description" };

  // for the input filed userko data halney
  const [inputData, setInputData] = useState("");

  // func call when input ids being given
  const change = (event) => {
    setInputData(event.target.value);
  };

  // state stores array for the list of our provided data
  const [newItems, newStateItems] = useState([]);

  // toggle button add button convert to edit on ce we edit true is default
  const [toggleAdd, newtoggleAdd] = useState(true);

  // to bringback add butn from edit one
  const [Bback, newBback] = useState(null);

  // add button press vayepoxi ko function
  const itemList = () => {
    if (!inputData) {
      //empty field ma enter garyo vaney
      alert("Enter a Item");
    } else if (inputData && !toggleAdd) {
      newStateItems(
        newItems.map((elem) => {
          if (elem.id === Bback) {
            //modification change old data witj new one

            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setInputData("");
      newtoggleAdd(true);
      newBback(null);
    } else {
      //field ma value palce vayera enter vayesi

      // newStateItems((preVal) => {
      //     return [...preVal, present];
      // });

      const allInput = { id: new Date().getTime().toString(), name: inputData };
      console.log(allInput);
      newStateItems([...newItems, allInput]);

      //Empty text add item afer enter
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = newItems.filter((elem) => {
      console.log(elem);
      return elem.id !== id; //return whose ids are not matched
    });
    newStateItems(updatedItems);
  };

  const editMe = (id) => {
    const updatedItems = newItems.find((elem) => {
      return elem.id === id;
    });

    // updateditems ma clicked element ko comonent aayo {id and name}

    newtoggleAdd(false); //false means add button turn into edit one

    console.log(updatedItems);
    setInputData(updatedItems.name);
    newBback(id);
  };

  const removeAll = () => {
    return newStateItems([]);
  };

  return (
    <>
      <div className="div-body">
        <Box className="box " style={{ position: "relative" }}>
          <div className="center-div">
            <div className="header">
              <h1>toDo List</h1>
            </div>
            <div className="div-input">
              <Input
                type="text"
                inputProps={ariaLabel}
                placeholder="Tell me your thoughts....."
                onChange={change}
                value={inputData}
              />

              {toggleAdd ? (
                <Button
                  variant="outlined"
                  color="secondary"
                  className="btnp"
                  onClick={itemList}
                >
                  <AddIcon color="primary" size="large" />
                </Button>
              ) : (
                <EditIcon onClick={itemList} className="edit"></EditIcon>
              )}
            </div>
          </div>
          <div className="listing">
            {newItems.map((val) => {
              //element stores value of id and name entered in newStateItems => newItems
              console.log(val.id);
              return (
                <div key={val.id} className="list-body">
                  <h1>{val.name}</h1>
                  <div className="items">
                    <DeleteIcon onClick={() => deleteItem(val.id)}></DeleteIcon>
                    <EditIcon onClick={() => editMe(val.id)}></EditIcon>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="remove">
            <Button variant="contained" onClick={removeAll}>
              Remove all
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
export default Todoadv;
