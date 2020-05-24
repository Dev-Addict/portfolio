import {Button, Icon} from './SlateEditorComponents';

const onClickMark = (event, type, editor) => {
    event.preventDefault();
    editor.toggleMark(type);
};

export const renderMarkButton = (type, icon, editor) => {
    const {value} = editor;
    const isActive = value.activeMarks.some(mark => mark.type == type);
    return (
        <Button
            reversed
            active={isActive}
            onMouseDown={event => onClickMark(event, type, editor)}
        >
            <Icon>{icon}</Icon>
        </Button>
    );
};

export const renderMark = ({children, mark, attributes}, editor, next) => {

    switch (mark.type) {
        case 'bold':
            return <strong {...attributes}>{children}</strong>;
        case 'code':
            return <code {...attributes}>{children}</code>;
        case 'italic':
            return <em {...attributes}>{children}</em>;
        case 'underlined':
            return <u {...attributes}>{children}</u>;
        default:
            return next();
    }
};