import {Formik, Form, Field} from "formik";
import {Button} from 'reactstrap';

import Input from "./Input";
import DateInput from "./DateInput";

const PortfolioForm = ({onSubmit, INITIAL_VALUES}) => {
    const validate = values => {
        const errors = {};
        Object.entries(values).forEach(([key, value]) => {
            if (!value && !['startDate', 'endDate'].includes(key)) {
                errors[key] = `${key.charAt(0).toUpperCase() + key.substr(1)} is required.`
            }
        });

        const startDate = values.startDate;
        const endDate = values.endDate;

        if (startDate && endDate && endDate.isBefore(startDate)) {
            errors.endDate = 'End Date can not be before Start Date.'
        }

        return errors;
    };

    return (
        <div>
            <Formik
                initialValues={INITIAL_VALUES}
                validate={validate}
                onSubmit={onSubmit}>
                {({
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field type="text" name="title" className="form-control" component={Input} label="Title"/>
                        <Field type="text" name="company" className="form-control" component={Input} label="Company"/>
                        <Field type="text" name="location" className="form-control" component={Input} label="Location"/>
                        <Field type="text" name="position" className="form-control" component={Input} label="Position"/>
                        <Field type="textarea" name="description" component={Input} className="form-control"
                               label="Description"/>
                        <Field name="startDate" className="form-control" component={DateInput} label="Start Date"
                               initialDate={INITIAL_VALUES.startDate}/>
                        <Field name="endDate" className="form-control" component={DateInput} label="End Date" canHide
                               initialDate={INITIAL_VALUES.endDate}/>
                        <Button type="submit" disabled={isSubmitting} color="success" size="lg">
                            Create
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PortfolioForm;