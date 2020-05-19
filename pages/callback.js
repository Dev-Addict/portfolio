import {useEffect} from 'react';
import {withRouter} from "next/router";

import BaseLayout from "../components/BaseLayout";
import auth0Client from "../services/auth0";

const Callback = props => {
    useEffect(() => {
        auth0Client.handleAuthentication()
            .then(() => {
                props.router.push('/');
            }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <BaseLayout>
        </BaseLayout>
    );
};

export default withRouter(Callback);