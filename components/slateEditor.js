import {useState} from 'react';
import {Editor} from "slate-react";
import {Value} from "slate";

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
                                text: 'A line of text in paragraph.'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

const CodeNode = ({attributes, children}) => (
    <pre {...attributes}>
        <code>{children}</code>
    </pre>
);

const ParagraphNode = ({attributes, children}) => (
    <p {...attributes}>
        {children}
    </p>
);

const SlateEditor = () => {
    const [value, setValue] = useState(initialValues);

    const onChange = ({value}) => {
        setValue(value);
    };

    const renderNode = (props, editor, next) => {
        if (props.node.type === 'code') {
            return (
                <CodeNode {...props}/>
            );
        } else if (props.node.type === 'paragraph') {
            return (<ParagraphNode {...props}/>);
        }
        next();
    };

    const onKeyDown = (event, editor, next) => {
        if (event.key !== '`' || !event.ctrlKey) {
            return next();
        }

        event.preventDefault();

        const isCode = editor.value.blocks.some(block => block.type === 'code');

        editor.setBlocks(isCode ? 'paragraph' : 'code');
    };

    return (
        <Editor value={value} onChange={onChange} renderNode={renderNode}/>
    );
};

export default SlateEditor;