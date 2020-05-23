import {Col, Button} from 'reactstrap';

import BaseLayout from "../components/BaseLayout";
import {getPortfolios} from "../actions";
import {Router} from '../routes';
import PortfolioCard from "../components/portfolioCard";

const Portfolios = ({auth, portfolios}) => {

    const renderPortfolios = () => portfolios.map((portfolio, index) => (
        <Col md="4" key={index} className="portfolio-card-hand">
            <PortfolioCard portfolio={portfolio} auth={auth}/>
        </Col>
    ));

    return (
        <BaseLayout auth={auth} title="Portfolios" className="portfolio-page">
            {auth.isAuthenticated && (auth.user || {})['http://localhost:3000/role'].includes('admin') &&
            <Button className="button-hand" color="success" onClick={() => Router.pushRoute('/portfolioNew')}>
                Create Portfolio
            </Button>
            }
            {renderPortfolios()}
        </BaseLayout>
    );
};

Portfolios.getInitialProps = async () => {
    try {
        const res = await getPortfolios();
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