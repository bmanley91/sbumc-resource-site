import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import RolesAccordian from '@components/RolesAccordian';
import ResourceTable from '@components/ResourceTable';
import { resourceData } from '../data/resources';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>SBUMC Resources</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header title="South Bethlehem UMC Team Resources" />

            <main>
                <RolesAccordian />
                <p>GOOGLE_SHEETS_API_KEY: {process.env.GOOGLE_SHEETS_API_KEY}</p>
                <p>GOOGLE_SHEETS_DOC_ID: {process.env.GOOGLE_SHEETS_DOC_ID}</p>
                <p>NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_API_KEY: {process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_API_KEY}</p>
                <p>NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_DOC_ID: {process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_SHEETS_DOC_ID}</p>
                <p>REACT_APP_GOOGLE_SHEETS_API_KEY: {process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}</p>
                <p>REACT_APP_GOOGLE_SHEETS_API_KEY: {process.env.REACT_APP_GOOGLE_SHEETS_API_KEY}</p>
                <ResourceTable tableData={resourceData}/>
            </main>
        </div>
    );
}
