import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ResourceLink from './ResourceLink';

const ResourceTable = (props) => {
    return (
        <div style={{maxWidth: '80vw'}}>
            <h2>Helpful Links</h2>
            <TableContainer component={Paper} style={{tableLayout: 'auto'}}>
                <Table aria-label='resource table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Resource</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody data-testid='resource-table-body'>
                        {props.tableData.map(row => (
                            <TableRow key={row.name}>
                                <TableCell data-testid={`${row.name}-name-cell`}>
                                    <ResourceLink name={row.name} link={row.link} />
                                </TableCell>
                                <TableCell data-testid={`${row.name}-description-cell`}>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

ResourceTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object)
};

export default ResourceTable;
