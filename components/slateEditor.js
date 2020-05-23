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

const SlateEditor = () => {
    const [value, setValue] = useState(initialValues);

    const onChange = ({value}) => {
        setValue(value);
    };

    return (
        <Editor value={value} onChange={onChange}/>
    );
};

export default SlateEditor;