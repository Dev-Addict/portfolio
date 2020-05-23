import {Row, Col} from 'reactstrap';

import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";
import PortfolioCreateForm from "../components/PortfolioCreateForm";
import {createPortfolio} from "../actions";

const PortfolioNew = ({auth}) => {
    const onSubmit = values => {
        createPortfolio(values).then(portfolio => {}).catch(error => {});
    };

    return (
        <BaseLayout auth={auth} title="Create Portfolio" className="portfolio-create-page">
            <Row>
                <Col md="6">
                    <PortfolioCreateForm onSubmit={onSubmit}/>
                </Col>
            </Row>
        </BaseLayout>
    );
};

// export default withAuth('admin')(PortfolioNew);
export default PortfolioNew;