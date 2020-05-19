import {useEffect, useState} from 'react';
import {withRouter} from "next/router";

import BaseLayout from "../components/BaseLayout";
import auth0Client from "../services/auth0";

const Callback = props => {
    const [error, setError] = useState('');

    useEffect(() => {
        auth0Client.handleAuthentication()
            .then(() => {
                props.router.push('/');
            }).catch(err => {
                setError(err.toString());
        });
    }, []);

    return (
        <BaseLayout>
            {
                error? <h1>There is a error logging in please try again</h1> : <h1>Verifying login data</h1>
            }
        </BaseLayout>
    );
};

export default withRouter(Callback);