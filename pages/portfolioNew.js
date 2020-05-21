import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";
import PortfolioCreateForm from "../components/PortfolioCreateForm";

import {Row, Col} from 'reactstrap';

const PortfolioNew = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="Create Portfolio" className="portfolio-create-page">
            <Row>
                <Col md="6">
                    <PortfolioCreateForm onSubmit={values => {}}/>
                </Col>
            </Row>
        </BaseLayout>
    );
};

// export default withAuth('admin')(PortfolioNew);
export default PortfolioNew;