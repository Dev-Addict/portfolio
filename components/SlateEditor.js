import {useState, useEffect, Fragment} from 'react';
import {Editor} from "slate-react";
import {Value} from "slate";

import SlateEditorHoverMenu from "./SlateEditorHoverMenu";
import {renderMark} from "./SlateEditorRenderers";

const initialValues = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: ''
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

const SlateEditor = () => {
    let menu;

    const [value, setValue] = useState(initialValues);

    const onChange = ({value}) => {
        setValue(value);
    };

    const updateMenu = () => {
        if (!menu) return;

        const {fragment, selection} = value;

        if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
            menu.removeAttribute('style');
            return
        }

        const native = window.getSelection();
        const range = native.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        menu.style.opacity = 1;
        menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`;

        menu.style.left = `${rect.left +
        window.pageXOffset -
        menu.offsetWidth / 2 +
        rect.width / 2}px`;
    };

    useEffect(() => updateMenu());

    const renderEditor = (props, editor, next) => {
        const children = next();
        return (
            <Fragment>
                {children}
                <SlateEditorHoverMenu innerRef={m => menu = m} editor={editor}/>
            </Fragment>
        );
    };

    return (
        <Editor value={value} onChange={onChange} renderMark={renderMark} renderEditor={renderEditor}
                placeholder="It was ..."/>
    );
};

export default SlateEditor;