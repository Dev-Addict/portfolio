import {Container, Row, Col} from 'reactstrap';
import Link from 'next/Link';
import moment from 'moment';

import BaseLayout from "../components/BaseLayout";

const Blog = ({auth}) => {
    return (
        <BaseLayout auth={auth} title="Blog">
            <Row>
                <Col md="10" lg="8" className="mx-auto">
                    <div className="post-preview">
                        {/*<Link route={`/blog/blogId`}>*/}
                            <a>
                                <h2 className="post-title">
                                    Very Nice Blog Post
                                </h2>
                                <h3 className="post-subtitle">
                                    How I Start Programming...
                                </h3>
                            </a>
                        {/*</Link>*/}
                        <p className="post-meta">Posted by
                            <a href="#"> Aria Azadi Pour </a>
                            {moment().format('LLLL')}</p>
                    </div>
                    <hr></hr>
                    <div className="post-preview">
                        {/*<Link route={`/blog/blogId`}>*/}
                            <a>
                                <h2 className="post-title">
                                    Very Nice Blog Post
                                </h2>
                                <h3 className="post-subtitle">
                                    How I Start Programming...
                                </h3>
                            </a>
                        {/*</Link>*/}
                        <p className="post-meta">Posted by
                            <a href="#"> Aria Azadi Pour </a>
                            {moment().format('LLLL')}</p>
                    </div>
                    <hr></hr>
                    <div className="post-preview">
                        {/*<Link route={`/blogs/blogId`}>*/}
                            <a>
                                <h2 className="post-title">
                                    Very Nice Blog Post
                                </h2>
                                <h3 className="post-subtitle">
                                    How I Start Programming...
                                </h3>
                            </a>
                        {/*</Link>*/}
                        <p className="post-meta">Posted by
                            <a href="#"> Aria Azadi Pour </a>
                            {moment().format('LLLL')}</p>
                    </div>
                    <hr></hr>
                    <div className="clearfix">
                        <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                </Col>
            </Row>

            <footer>
                <Container>
                    <Row>
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"/>
                                            <i className="fab fa-twitter fa-stack-1x fa-inverse"/>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"/>
                                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"/>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fas fa-circle fa-stack-2x"/>
                                            <i className="fab fa-github fa-stack-1x fa-inverse"/>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-muted">Copyright &copy; Aria Azadi Pour 2018</p>
                        </div>
                    </Row>
                </Container>
            </footer>
        </BaseLayout>
    );
};

export default Blog;