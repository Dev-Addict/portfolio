import BaseLayout from "../components/BaseLayout";
import SlateEditor from "../components/SlateEditor";
import withAuth from "../components/withAuth";

const BlogEditor = ({auth}) => {
    return (
        <BaseLayout auth={auth} className="blog-editor-page">
            <SlateEditor/>
        </BaseLayout>
    );
};

// export default withAuth('admin')(BlogEditor);
export default BlogEditor;