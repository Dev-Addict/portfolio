import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";
import PortfolioCreateForm from "../components/PortfolioCreateForm";

const PortfolioNew = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="Create Portfolio" className="portfolio-create-page">
            <PortfolioCreateForm/>
        </BaseLayout>
    );
};

export default withAuth('admin')(PortfolioNew);