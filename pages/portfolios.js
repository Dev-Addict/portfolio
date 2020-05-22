import BaseLayout from "../components/BaseLayout";
import {getPortfolios} from "../actions";

const Portfolios = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="Portfolios" className="portfolio-page">
        </BaseLayout>
    );
};

Portfolios.getInitialProps = async ({req}) => {
    try {
        const res = await getPortfolios(req);
        const portfolios = res.data.data.docs;
        return {
            portfolios
        };
    } catch (err) {
        return {
            portfolios: [],
            err: 'Can\'t load portfolios.'
        };
    }
};

export default Portfolios;