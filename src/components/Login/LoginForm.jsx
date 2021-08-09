import { Field, Form, Formik, ErrorMessage } from "formik";
import styles from "./Login.module.css";
import * as yup from "yup";

const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("Required field")
            .email("Email has incorrect format"),
        password: yup
            .string()
            .required("Required field")
            .min(3),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords much match')
            .required("Required field")
    });
    const login = (values, onSubmitProps) => {
        props.login(values.email, values.password, values.rememberMe, onSubmitProps.setSubmitting);
        console.log(props);
    }
    
    return (
        <Formik
            initialValues={{ email: "", password: "", confirmPassword: "", rememberMe: false }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values, onSubmitProps) => {login(values, onSubmitProps)}}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
                dirty,
                isInvalidEmail = touched.email && errors.email && `${styles.invalid} invalid`,
                isInvalidPassword = touched.password && errors.password && `${styles.invalid} invalid`,
            }) => (
                <Form className={`${styles.form} form`}>
                    <div className={`${styles.item} item`}>
                        <label>
                            Email:
                            <Field
                                name="email"
                                type="text"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={isInvalidEmail}
                            />
                        </label>
                    <ErrorMessage className={`${styles.error} error`} name="email" component="div" />
                    </div>
                    <div className={`${styles.item} item`}>
                        <label>
                            Password:
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={isInvalidPassword}
                            />
                        </label>
                    <ErrorMessage className={`${styles.error} error`} name="password" component="div" />
                    </div>
                    <div className={`${styles.item} item`}>
                        <label>
                            Confirm password: 
                            <Field
                                name="confirmPassword"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                className={isInvalidPassword}
                            />
                        </label>
                    <ErrorMessage className={`${styles.error} error`} name="confirmPassword" component="div" />
                    </div>
                    <div className={`${styles.item} itemCheckbox item`}>
                        <label>
                            Remember me
                            <Field name="rememberMe" type="checkbox" />
                        </label>
                    </div>
                    <div className={`${styles.error} ${styles.formStatus} error`}>{props.authStatus}</div>
                    <div className={`${styles.item} item`}>
                        <button type="submit" disabled={!isValid && !dirty}>
                            Login
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;