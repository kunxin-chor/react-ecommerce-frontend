import { Formik, Field, Form } from 'formik';

export default function RegisterPage() {

    const initialValues = {
        name: "",
        email: ""
    }

    // event handler for submitting the form
    // two arguments
    // arg 1: the values of the form
    // arg 2: formikHelper (utility object that has useful functions)
    const handleSubmit = (values, formikHelper) => {
        console.log(values)
    }

    return <div className="container">
        <h1>Register Page</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >

            {
                (formik) => (
                    <Form>
                        <div>
                            <label className="form-label">Name</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div>
                            <label className="form-label">Email:</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                            />
                        </div>
                        <button className="btn btn-primary m-1">Submit</button>
                    </Form>
                )
            }
        </Formik>

    </div>
}