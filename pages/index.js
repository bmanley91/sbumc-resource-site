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
                {console.log(process.env)}
                <ResourceTable tableData={resourceData}/>
            </main>
        </div>
    );
}
