import {Row, Col} from 'reactstrap';
import {useState} from 'react';

import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";
import PortfolioForm from "../components/PortfolioForm";
import {getPortfolio, updatePortfolio} from "../actions";
import {Router} from '../routes';

const PortfolioEdit = ({auth, portfolio}) => {
    const [error, setError] = useState('');

    const onSubmit = (values, {setSubmitting}) => {
        setSubmitting(true);
        updatePortfolio(values, portfolio._id)
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
        <BaseLayout auth={auth} title="Edit Portfolio" className="portfolio-create-page">
            <Row>
                <Col md="6">
                    <div className="error">{error}</div>
                    <PortfolioForm onSubmit={onSubmit} INITIAL_VALUES={portfolio}/>
                </Col>
            </Row>
        </BaseLayout>
    );
};

PortfolioEdit.getInitialProps = async ({query}) => {
    try {
        const res = await getPortfolio(query.id);
        return {
            portfolio: res.data.data.doc
        };
    } catch (err) {
        return {
            portfolio: {}
        };
    }};

// export default withAuth('admin')(PortfolioEdit);
export default PortfolioEdit;