import DatePicker from "react-datepicker";
import {useState, useEffect} from 'react';
import moment from "moment";
import {FormGroup, Input as InputStrap, Label} from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({label, form: {setFieldValue, setFieldTouched, touched, errors}, field: {name}}) => {
    const [date, setDate] = useState(moment());

    useEffect(() => {
        setFieldValue(name, date, true);
        setFieldTouched(name, true, true);
    }, []);

    const onChange = date => {
        setDate(date);
        setFieldValue(name, date, true);
        setFieldTouched(name, true, true);
    };

    return (
        <FormGroup>
            <Label>{label}</Label>
            <div className="input-group">
                <DatePicker selected={date} onChange={onChange} peekNextMonth showMonthDropdown showYearDropdown
                            maxDate={moment()} dropdownMode="select" className="form-control"/>
            </div>
            {
                touched[name] && errors[name] &&
                <div className="error">{errors[name]}</div>
            }
        </FormGroup>
    );
};

export default DateInput;