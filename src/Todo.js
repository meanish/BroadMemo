import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
    const ariaLabel = { 'aria-label': 'description' };
    const [present, newp] = useState("");

    const change = (event) => {
        console.log(event.target.value);
        newp(event.target.value);
    }
    const [newItems, newStateItems] = useState([]);

    const itemList = () => {
        if (!present) {
            alert("Enter a Item");
        } else {
            newStateItems((preVal) => {

                return [...preVal, present];
            });
            newp("");
            //Empty text add item afer enter

        }
    }

    const deleteItem = (id) => {
        console.log(id)
        const update = newItems.filter((ele, ind) => {
            return ind !== id;
        }
        
        )
        newStateItems(update);
    }

    const removeAll = () => {
        return newStateItems([])
    }

    return (
        <>
            <div className="div-body">
                <Box className="box " style={{ position: "relative" }} >
                    <div className="center-div">
                        <div class="header"><h1>toDo List</h1></div>
                        <div className="div-input">
                            <Input
                                type="text"
                                inputProps={ariaLabel}
                                placeholder="Add your items..."
                                onChange={change}
                                value={present}
                            />
                            <Button variant="outlined" color="secondary" className="btnp" onClick={itemList}>
                                <AddIcon color="primary" size="large" />
                            </Button>
                        </div>
                    </div>
                    <div className="listing">

                        {
                            newItems.map((val, index) => {
                                return (
                                    <div key={index} className=" border d-flex justify-content-center">
                                        <h3 className="me-5 ">{val}</h3>
                                        <DeleteIcon onClick={() => deleteItem(index)}></DeleteIcon>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <Button variant="contained" style={{ position: "absolute", bottom: '0px', left: '30%' }} onClick={removeAll}>Remove all</Button>
                </Box>
            </div>

        </>
    )
}
export default Todo;