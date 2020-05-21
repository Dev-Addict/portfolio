import {Formik, Form, Field} from "formik";

import Input from "./Input";
import DateInput from "./DateInput";

const PortfolioCreateForm = () => {
    const INITIAL_VALUES = {
        title: '',
        company: '',
        location: '',
        position: '',
        description: '',
        startDate: '',
        endDate: ''
    };

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
                validate={validate}>
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
                        <Field name="startDate" className="form-control" component={DateInput} label="Start Date"/>
                        <Field name="endDate" className="form-control" component={DateInput} label="End Date" canHide/>
                        <button type="submit" disabled={isSubmitting}>
                            Create
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PortfolioCreateForm;