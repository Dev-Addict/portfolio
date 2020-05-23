import {Row, Col} from 'reactstrap';
import {useState} from 'react';

import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";
import PortfolioForm from "../components/PortfolioForm";
import {createPortfolio} from "../actions";
import {Router} from '../routes';

const PortfolioNew = ({auth}) => {
    const [error, setError] = useState('');

    const onSubmit = (values, {setSubmitting}) => {
        setSubmitting(true);
        const portfolio = {...values};
        createPortfolio(portfolio)
            .then(portfolio => {
                setSubmitting(false);
                setError('');
                Router.pushRoute('/portfolios')
            })
            .catch(error => {
                setSubmitting(false);
                setError(error.response.data.message);
            });
    };

    return (
        <BaseLayout auth={auth} title="Create Portfolio" className="portfolio-create-page">
            <Row>
                <Col md="6">
                    <div className="error">{error}</div>
                    <PortfolioForm onSubmit={onSubmit} INITIAL_VALUES={{
                        title: '',
                        company: '',
                        location: '',
                        position: '',
                        description: '',
                        startDate: '',
                        endDate: ''
                    }}/>
                </Col>
            </Row>
        </BaseLayout>
    );
};

export default withAuth('admin')(PortfolioNew);