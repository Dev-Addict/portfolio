import {Formik, Form, Field, ErrorMessage} from "formik";
import {Button, FormGroup, Label} from 'reactstrap';

import Input from "./Input";

const PortfolioCreateForm = props => {
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    const INITIAL_VALUES = {
        title: '',
        company: '',
        location: '',
        position: '',
        description: '',
        startDate: '',
        endDate: ''
    };

    return (
        <div>
            <Formik
                initialValues={INITIAL_VALUES}
                validate={validate}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field type="text" name="title" className="form-control" component={Input} label="Title"/>
                        <Field type="text" name="company" className="form-control" component={Input} label="Company"/>
                        <Field type="text" name="location" className="form-control" component={Input} label="Location"/>
                        <Field type="text" name="position" className="form-control" component={Input} label="Position"/>
                        <Field type="textarea" name="description" component={Input} className="form-control" label="Description"/>
                        <Field type="date" name="startDate" className="form-control" component={Input} label="Start Date"/>
                        <Field type="date" name="endDate" className="form-control" component={Input} label="End Date"/>
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