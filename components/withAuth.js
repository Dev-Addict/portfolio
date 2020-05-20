import BaseLayout from "./BaseLayout";

const withAuth = (role = 'user') => (Component) => {
    const withAuthComponent = (props) => {
        if (props.auth.isAuthenticated && props.auth.user['http://localhost:3000/role'].includes(role)) {
            return (<Component {...props}/>);
        }
        return (
            <BaseLayout auth={props.auth}>
                <h1>You Are Not Allowed To See This Page.</h1>
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