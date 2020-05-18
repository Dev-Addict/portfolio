import {useRouter} from "next/router";

import BaseLayout from "../../components/BaseLayout";

const Portfolio = props => {
    const router = useRouter();

    const {id} = router.query;

    return (
        <BaseLayout>
            {id}
        </BaseLayout>
    );
};

export default Portfolio;