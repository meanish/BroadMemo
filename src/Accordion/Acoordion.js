import React,{useState} from 'react';
import {MyDetails} from "./Api";
import MyAccordion from "./MyAcoordion";

const Acoordion = () => {

    const[data, newData] = useState(MyDetails);

    return (
        <>
            {
                data.map((val) => {
                    const{id,name,roll,number} = val;
                    return(<MyAccordion key={val.id}  name={val.name} roll={val.roll} no={val.number}/>);
                })
            }
        </>
    )
}

export default Acoordion