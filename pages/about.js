import BaseLayout from "../components/BaseLayout";
import withAuth from "../components/withAuth";

const About = ({auth}) => {
    return (
        <BaseLayout auth={auth}>
        </BaseLayout>
    );
};

export default withAuth(About);