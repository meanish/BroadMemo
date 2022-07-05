import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MyAcoordion(props) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>    Accordion {props.no}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        My name is {props.name}.<br/>
                        My roll number is {props.roll}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default MyAcoordion;
