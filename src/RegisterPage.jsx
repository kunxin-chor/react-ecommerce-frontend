import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFlashMessage } from './FlashMessageStore';
import { useLocation } from 'wouter';

export default function RegisterPage() {

    const {showMessage} = useFlashMessage();
    const [, setLocation] = useLocation();

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        salutation: "Mr",
        marketingPreferences: [],
        country: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().email("Please ensure you have entered your email correctly").required("Email is complusory"),
        password: Yup.string().min(8, "Password must have at least 8 characters").required(),
        confirmPassword: Yup.string().oneOf([
            Yup.ref("password"),
            null
        ], "Passwords must match").required("Please re-enter your password again")
    })

    // event handler for submitting the form
    // two arguments
    // arg 1: the values of the form
    // arg 2: formikHelper (utility object that has useful functions)
    const handleSubmit = (values, formikHelper) => {
        console.log(values)
        showMessage("Your account has been created", "success");
        setLocation("/")
    }

    return <div className="container">
        <h1>Register Page</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
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
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-danger"
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
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div>
                            <label className="form-label">
                                Password
                            </label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div>
                            <label className="form-label">
                                Confirm Password
                            </label>
                            <Field
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="text-danger"
                            />
                        </div>

                        <div>
                            <label className="form-label">Salutation</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <Field
                                        type="radio"
                                        name="salutation"
                                        value="Mr"
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">Mr.</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field
                                        type="radio"
                                        name="salutation"
                                        value="Ms"
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">Ms.</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <Field
                                        type="radio"
                                        name="salutation"
                                        value="Mrs"
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">Mrs.</label>
                                </div>

                            </div>
                        </div>

                        <div>
                            <label className="form-label">Marketing Preferences</label>
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    name="marketingPreferences"
                                    value="1"
                                    className="form-check-input"
                                />
                                <label className="form-check-label">Email</label>
                            </div>
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    name="marketingPreferences"
                                    value="2"
                                    className="form-check-input"
                                />
                                <label className="form-check-label">SMS</label>
                            </div>
                        </div>

                        <div>
                            <label className="form-label">Country</label>
                            <Field
                                as="select"
                                className="form-select"
                                name="country"
                            >
                               <option value="">Select Country</option>
                               <option value="sg">Singapore</option>
                               <option value="my">Malaysia</option>
                               <option value="id">Indonesia</option>
                               <option value="others">Others</option>

                            </Field>
                        </div>

                        <button type="submit" className="btn btn-primary m-1">Submit</button>
                    </Form>
                )
            }
        </Formik>

    </div>
}