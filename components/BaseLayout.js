import Header from "./Header";
import BasePage from "./BasePage";

const BaseLayout = ({children, className = '', auth, title = '', headerType = 'default'}) => {

    return (
        <div className="layout-container">
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