import BaseLayout from "./BaseLayout";

const withAuth = Component => {
    const withAuthComponent = (props) => {
        if (props.auth.isAuthenticated) {
            return (<Component {...props}/>);
        }
        return (
            <BaseLayout auth={props.auth}>
                <h1>You must be signed in to see this page.</h1>
            </BaseLayout>
        );
    };

    withAuthComponent.getInitialProps = async (args) => {
        const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

        return {...pageProps};
    };

    return withAuthComponent;
};

export default withAuth;