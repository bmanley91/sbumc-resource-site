import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ResourceTable from './ResourceTable';

describe ('ResourceTable', () => {
    beforeEach(() => {
        const testTableData = [{
            name: 'hello',
            link: 'http://hello.url',
            description: 'The description of hello'
        }];

        render(<ResourceTable tableData={ testTableData }/>);
    });

    it ('Should render the table header', () => {
        expect(screen.getByText('Resource')).not.toBeNull();
        expect(screen.getByText('Description')).not.toBeNull();
    });

    it ('Should render the name/link cell', () => {
        const nameCell = screen.getByTestId('hello-name-cell');
        const nameLink = within(nameCell).getByTestId('hello-name-link');
        expect(nameCell).toHaveTextContent('hello');
        expect(nameLink).toHaveAttribute('href', 'http://hello.url');
    });

    it ('Should render the description cell', () => {
        const descriptionCell = screen.getByTestId('hello-description-cell');
        expect(descriptionCell).toHaveTextContent('The description of hello');
    });
});
