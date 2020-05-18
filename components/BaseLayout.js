import {Fragment} from 'react';

import Header from "./Header";
import '../style/main.scss'

const BaseLayout = props => {
    return (
        <Fragment>
            <Header/>
            {props.children}
        </Fragment>
    );
};

export default BaseLayout;