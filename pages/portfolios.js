import {Col, Card, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';

import BaseLayout from "../components/BaseLayout";
import {getPortfolios} from "../actions";

const Portfolios = ({auth, portfolios}) => {
    const renderPortfolios = () => portfolios.map((portfolio, index) => (
        <Col md="4" key={index}>
            <span>
                <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-city">{portfolio.location}</p>
                        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                        <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                        <div className="readMore"></div>
                    </CardBody>
                </Card>
            </span>
        </Col>
    ));

    return (
        <BaseLayout auth={auth} title="Portfolios" className="portfolio-page">
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