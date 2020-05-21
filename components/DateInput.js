import DatePicker from "react-datepicker";
import {useState, useEffect} from 'react';
import moment from "moment";
import {FormGroup, Label, Button} from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({label, canHide = false, form: {setFieldValue, setFieldTouched, touched, errors}, field: {name}}) => {
    const [date, setDate] = useState(moment());
    const [isHidden, setHidden] = useState(false);

    useEffect(() => {
        setFieldValue(name, date, true);
        setFieldTouched(name, true, true);
    }, []);

    const onChange = date => {
        setDate(date);
        setFieldValue(name, date, true);
        setFieldTouched(name, true, true);
    };

    const toggleHiddenState = (shouldUpdate = false) => () => {
        setHidden(!isHidden);
        if (shouldUpdate) {
            setFieldValue(name, false, true);
        } else {
            setFieldValue(name, date, true);
        }
    };

    return (
        <FormGroup>
            <Label>{label}</Label>
            {
                !isHidden &&
                <div className="input-group">
                    <DatePicker selected={date} onChange={onChange} peekNextMonth showMonthDropdown showYearDropdown
                                maxDate={moment()} dropdownMode="select" className="form-control"/>
                </div>
            }
            {
                !isHidden && canHide &&
                <button onClick={toggleHiddenState(true)}>Still working</button>
            }
            {
                isHidden &&
                <button onClick={toggleHiddenState()}>Set End Date</button>
            }
            {
                touched[name] && errors[name] &&
                <div className="error">{errors[name]}</div>
            }
        </FormGroup>
    );
};

export default DateInput;