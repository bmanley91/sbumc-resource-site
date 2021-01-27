import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { resourceData } from '../data/resources';

const useStyles = makeStyles({
    table: {
      minWidth: 850,
    }
});

export default function ResourceTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="resource table">
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
    );
}
