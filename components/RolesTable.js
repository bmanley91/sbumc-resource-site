import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
    tableContainer: {
        margin: '10px'
    }
}));

export const RolesTable = props => {
    const classes = useStyles();

    return (
        <div className={classes.tableContainer}>
            <TableContainer component={Paper}>
                <Table aria-label='resource table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Role</TableCell>
                            <TableCell>Person</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.db.Sheet1.filter(data => data['Service Date'] === props.targetDate).
                                map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{data.Role}</TableCell>
                                        <TableCell>{data.Person} - {data.Contact}</TableCell>
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

RolesTable.propTypes = {
    db: PropTypes.shape({
        Sheet1: PropTypes.arrayOf(PropTypes.object)
    }),
    targetDate: PropTypes.string
};

export default withGoogleSheets('Sheet1')(RolesTable);

