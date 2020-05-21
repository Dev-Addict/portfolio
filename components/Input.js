import {FormGroup, Label, Input as InputStrap} from 'reactstrap';

const Input = ({type, label, field, form: {touched, errors}, ...props}) => {
    return (
        <FormGroup>
            <Label>{label}</Label>
            <InputStrap type={type} {...field}/>
            {
                touched[field.name] && errors[field.name] &&
                <div className="error">{errors[field.name]}</div>
            }
        </FormGroup>
    );
};

export default Input;