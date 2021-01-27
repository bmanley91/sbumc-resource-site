import Head from 'next/head';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ResourceTable from '@components/ResourceTable';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>SBUMC Resources</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="South Bethlehem UMC Team Resources" />
                <ResourceTable />
            </main>
            
            <Footer />
        </div>
    );
}
