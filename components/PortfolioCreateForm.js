import {Formik, Form, Field, ErrorMessage} from "formik";
import {Button, FormGroup, Label} from 'reactstrap';

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
                        <FormGroup>
                            <Label>Title</Label>
                            <Field type="text" name="title" className="form-control"/>
                            <ErrorMessage name="title" component="div"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Company</Label>
                            <Field type="text" name="company" className="form-control"/>
                            <ErrorMessage name="company" component="div"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Location</Label>
                            <Field type="text" name="location" className="form-control"/>
                            <ErrorMessage name="location" component="div"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Position</Label>
                            <Field type="text" name="position" className="form-control"/>
                            <ErrorMessage name="position" component="div"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Description</Label>
                            <Field type="textarea" name="description" component="textarea" className="form-control"/>
                            <ErrorMessage name="description" component="div"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Start Date</Label>
                            <Field type="date" name="startDate" className="form-control"/>
                            <ErrorMessage name="startDate" component="div"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>End Date</Label>
                            <Field type="date" name="endDate" className="form-control"/>
                            <ErrorMessage name="endDate" component="div"/>
                        </FormGroup>
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