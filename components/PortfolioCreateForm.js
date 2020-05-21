import {Formik, Form, Field, ErrorMessage} from "formik";

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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <Field type="text" name="title"/>
                            <ErrorMessage name="title" component="div"/>
                        </div>
                        <div>
                            <label>Company</label>
                            <Field type="text" name="company"/>
                            <ErrorMessage name="company" component="div"/>
                        </div>
                        <div>
                            <label>Location</label>
                            <Field type="text" name="location"/>
                            <ErrorMessage name="location" component="div"/>
                        </div>
                        <div>
                            <label>Position</label>
                            <Field type="text" name="position"/>
                            <ErrorMessage name="position" component="div"/>
                        </div>
                        <div>
                            <label>Description</label>
                            <Field type="textarea" name="description" component="textarea"/>
                            <ErrorMessage name="description" component="div"/>
                        </div>
                        <div>
                            <label>Start Date</label>
                            <Field type="date" name="startDate"/>
                            <ErrorMessage name="startDate" component="div"/>
                        </div>
                        <div>
                            <label>End Date</label>
                            <Field type="date" name="endDate"/>
                            <ErrorMessage name="endDate" component="div"/>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Create
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default PortfolioCreateForm;