import Header from "./Header";
import BasePage from "./BasePage";

const BaseLayout = ({children, className = ''}) => {

    return (
        <div className="layout-container">
            <Header/>
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