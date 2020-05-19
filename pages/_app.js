import App, {Container} from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';

import auth0Client from "../services/auth0";
import '../style/main.scss';

class _App extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};

        const user = process.browser ? await auth0Client.clientAuth() : await auth0Client.serverAuth(ctx.req);

        const auth = {
            user,
            isAuthenticated : Boolean(user)
        };

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps, auth};
    }

    render() {
        const {Component, pageProps, auth} = this.props;

        return (
            <Component {...pageProps} auth={auth}/>
        );
    }
};

export default _App;