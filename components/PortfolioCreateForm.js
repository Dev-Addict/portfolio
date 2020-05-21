import {useState} from 'react';

const PortfolioCreateForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [programingLanguage, setProgramingLanguage] = useState('');

    const onChange = setFunction => event => setFunction(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={title} onChange={onChange(setTitle)}/>
            <label>Description</label>
            <input type="text" value={description} onChange={onChange(setDescription)}/>
            <label>Favorite Programming Language</label>
            <select value={programingLanguage} onChange={onChange(setProgramingLanguage)}>
                <option value="">Select Programming Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="PHP">PHP</option>
                <option value="C/C++">C/C++</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
            </select>
            <button type="submit">Create</button>
        </form>
    );
};

export default PortfolioCreateForm;