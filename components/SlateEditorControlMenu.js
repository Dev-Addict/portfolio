import {Button} from "reactstrap";

const SlateEditorControlMenu = (props) => {
    return (
        <div className="control-menu">
            <h1 className="title">Write your story...</h1>
            <div className="status-box">
                Saved
            </div>
            <Button color="success">Save</Button>
        </div>
    );
};

export default SlateEditorControlMenu;