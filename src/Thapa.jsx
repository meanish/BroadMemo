import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);
    if (list) {
        console.log(JSON.parse(localStorage.getItem('lists')));
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return []
    }
};

const Testtodo = () => {

    const [inputData, setInputData] = useState('');

    const [items, setItems] = useState(getLocalItems());

    const [toogleSubmit, setToggleSubmit] = useState(true);

    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('plz fill the data');
        }
        else if (inputData && !toogleSubmit) {
            // alert('I am clicked ');

            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        console.log('I am matched ');
                        return { ...elem, name: inputData };
                    }
                    return elem;
                })
            );

            setToggleSubmit(true);

            setInputData('');

            setIsEditItem(null);
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }

    }

    const deleteItem = (id) => {
        // console.log('deleted');
        const updatedItems = items.filter((elem) => {
            return elem.id !== id;
        })
        setItems(updatedItems);
    }


    // edit the item
    //     When user clikc on edit button 

    // 1: get the id and name of the data which user clicked to edit
    // 2: set the toggle mode to change the submit button into edit button
    // 3: Now update the value of the setInput with the new updated value to edit. 
    // 4: To pass the current element Id to new state variable for reference 

    const editItem = (id) => {

        let newEditItem = items.find((elem) => {
            return elem.id === id;
        })
        console.log(newEditItem.name);

        setToggleSubmit(false);

        setInputData(newEditItem.name);
        console.log("my new input name is" + inputData);
        setIsEditItem(id);

    }


    // remove all the data 
    const remvoveAll = () => {
        setItems([]);
    }

    // add data to localStorage
    useEffect(() => {
        // localStorage.setItem('thapaName', 'vinod');
        localStorage.setItem('lists', JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>

                        <figcaption>Add your list here ✌ </figcaption>
                        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    </figure>
                    <div className="addItems">
                        <input type="text" className="form-control" placeholder="✍️ Add item..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />

                        {/* toggle the submit btn with the edit btn  */}
                        {toogleSubmit ? <Button variant="outlined" color="secondary" className="btnp" onClick={addItem}>
                            <AddIcon color="primary" size="large" />
                        </Button> : <i className="far fa-edit add-btn" title="Edit item" onClick={addItem}></i>}

                    </div>

                    <div className="showItems">
                        {
                            items.map((elem) => {
                                console.log(elem);
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3> {elem.name} </h3>

                                        <DeleteIcon onClick={() => editItem(elem.id)}></DeleteIcon>

                                        <i className="far fa-trash-alt add-btn" title="Delete item" onClick={() => deleteItem(elem.id)}></i>
                                    </div>


                                )
                            })
                        }

                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" target="_blank" onClick={remvoveAll}><span>CHECK LIST </span></button>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Testtodo