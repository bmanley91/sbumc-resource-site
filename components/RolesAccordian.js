import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GoogleSheetsProvider from 'react-db-google-sheets';
import RolesTable from '@components/RolesTable';
import { getNextSunday } from '../util/dateUtil';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordianWrapper: {
        marginBottom: '10px',
        width: '100%'
    }
}));

const RolesAccordian = () => {
    const classes = useStyles();

    const nextSunday = getNextSunday();

    return (
        <div className={classes.accordianWrapper} style={{marginBottom: '10px'}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        {'Who\'s doing what next Sunday?'}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <GoogleSheetsProvider>
                        <RolesTable targetDate={nextSunday}/>
                    </GoogleSheetsProvider>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default RolesAccordian;
