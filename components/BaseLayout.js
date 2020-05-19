import Header from "./Header";
import BasePage from "./BasePage";

const BaseLayout = ({children, className = '', auth}) => {

    return (
        <div className="layout-container">
            <Header auth={auth}/>
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    <BasePage>
                        {children}
                    </BasePage>
                </div>
            </main>
        </div>
    );
};

export default BaseLayout;