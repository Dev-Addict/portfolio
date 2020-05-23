import {Fragment} from 'react';
import {Col, Card, CardHeader, CardBody, CardTitle, CardText, Button} from 'reactstrap';

import BaseLayout from "../components/BaseLayout";
import {getPortfolios} from "../actions";
import {Router} from '../routes';
import {deletePortfolio} from "../actions";

const Portfolios = ({auth, portfolios}) => {
    const deletePortfolioWithWarning = async (portfolioId) => {
        try {
            const canDelete = window.confirm(`Do you want to delete portfolio with id of ${portfolioId}`);
            if (canDelete) {
                await deletePortfolio(portfolioId);
            }
        } catch (err) {
            window.alert('There is err deleting portfolio');
        }
    };

    const renderPortfolios = () => portfolios.map((portfolio, index) => (
        <Col md="4" key={index} className="portfolio-card-hand">
            <span>
                <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-city">{portfolio.location}</p>
                        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                        <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                        <div className="readMore">
                            {auth.isAuthenticated && (auth.user || {})['http://localhost:3000/role'].includes('admin') &&
                            <Fragment>
                                <Button color="warning" onClick={() => {
                                    Router.pushRoute(`/portfolioEdit/${portfolio._id}`);
                                }}>
                                    Edit
                                </Button>{' '}
                                <Button color="danger" onClick={async () => {
                                    await deletePortfolioWithWarning(portfolio._id);
                                    Router.pushRoute(`/portfolios`);
                                }}>
                                    Delete
                                </Button>
                            </Fragment>
                            }
                        </div>
                    </CardBody>
                </Card>
            </span>
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