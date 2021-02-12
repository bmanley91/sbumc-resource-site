import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { resourceData } from '../data/resources';

export default function ResourceTable() {
    return (
        <>
            <h2>Helpful Links</h2>
            <TableContainer component={Paper}>
                <Table aria-label='resource table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Resource</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {resourceData.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="a" href={row.link}>{row.name}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
