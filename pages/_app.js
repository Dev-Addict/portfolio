import App, {Container} from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/main.scss';

class _App extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {pageProps};
    }

    render() {
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <Component {...pageProps}/>
            </Container>
        );
    }
};

export default _App;