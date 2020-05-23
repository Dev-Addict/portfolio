import Head from 'next/head';

import Header from "./Header";
import BasePage from "./BasePage";

const BaseLayout = ({children, className = '', auth, title = '', headerType = 'default'}) => {

    return (
        <div className="layout-container">
            <Head>
                <script src="https://kit.fontawesome.com/e59050275e.js" crossOrigin="anonymous"/>
            </Head>
            <Header className={`port-nav-${headerType}`} auth={auth}/>
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    <BasePage title={title}>
                        {children}
                    </BasePage>
                </div>
            </main>
        </div>
    );
};

export default BaseLayout;