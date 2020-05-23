import {Row, Col} from 'reactstrap';
import {useState} from 'react';

import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";
import PortfolioCreateForm from "../components/PortfolioCreateForm";
import {getPortfolio} from "../actions";
import {Router} from '../routes';

const PortfolioEdit = ({auth}) => {
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
                    <PortfolioCreateForm onSubmit={onSubmit}/>
                </Col>
            </Row>
        </BaseLayout>
    );
};

PortfolioEdit.getInitialProps = async ({query}) => {
    try {
        const res = await getPortfolio(query.id);
        console.log(res.data.data.doc);
        return {
            portfolio: res.data.data.doc
        };
    } catch (err) {
        return {
            portfolio: {}
        };
    }
};

// export default withAuth('admin')(PortfolioEdit);
export default PortfolioEdit;