import DatePicker from "react-datepicker";
import {useState} from 'react';
import moment from "moment";
import {FormGroup, Label} from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({label}) => {
    const [date, setDate] = useState(moment());

    const onChange = date => setDate(date);

    return (
        <FormGroup>
            <Label>{label}</Label>
            <div className="input-group">
                <DatePicker selected={date} onChange={onChange} peekNextMonth showMonthDropdown showYearDropdown
                            maxDate={moment()} dropdownMode="select" className="form-control"/>
            </div>
        </FormGroup>
    );
};

export default DateInput;