import {Row, Col} from 'reactstrap';
import {useState} from 'react';

import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";
import PortfolioCreateForm from "../components/PortfolioCreateForm";
import {createPortfolio} from "../actions";

const PortfolioNew = ({auth}) => {
    const [error, setError] = useState('');

    const onSubmit = values => {
        const portfolio = {...values, userId: 'sdfsdfjlsdfklsdf;'};
        createPortfolio(portfolio)
            .then(portfolio => {
                setError('')
            })
            .catch(error => {
                setError(error.response.data.message)
            });
    };

    return (
        <BaseLayout auth={auth} title="Create Portfolio" className="portfolio-create-page">
            <Row>
                <Col md="6">
                    <div className="error">{error}</div>
                    <PortfolioCreateForm onSubmit={onSubmit}/>
                </Col>
            </Row>
        </BaseLayout>
    );
};

// export default withAuth('admin')(PortfolioNew);
export default PortfolioNew;