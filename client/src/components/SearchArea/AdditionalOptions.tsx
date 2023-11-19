import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode } from "react";

interface IProps{
    children: ReactNode
}

const AdditionalOptions: React.FC<IProps> = (props) => {
    return(
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" >
                <Typography>詳細な設定</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {props.children}
            </AccordionDetails>
        </Accordion>
    )
}

export default AdditionalOptions
