import {Fragment} from 'react';
import {Button, Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";

import {Router} from "../routes";
import {deletePortfolio} from "../actions";

const PortfolioCard = ({portfolio, auth}) => {
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

    return (
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
    );
};

export default PortfolioCard;