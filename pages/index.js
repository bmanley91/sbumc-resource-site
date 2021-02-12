import React from 'react';
import Head from 'next/head';
import Footer from '@components/Footer';
import Header from '@components/Header';
import RolesAccordian from '@components/RolesAccordian';
import ResourceTable from '@components/ResourceTable';

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
                <ResourceTable />
            </main>
            
            <Footer />
        </div>
    );
}
