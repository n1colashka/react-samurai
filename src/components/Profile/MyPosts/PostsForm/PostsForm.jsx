import { Field, Form, Formik, ErrorMessage } from "formik";
import styles from "./PostsForm.module.css";
import * as yup from "yup";

const PostsForm = (props) => {
    const addPost = (values) => {
        props.addPost(values.text);
        // values.text = "";
    }
    const validationSchema = yup.object().shape({
        text: yup
            .string()
            .typeError("Value must be a string")
            .max(200)
    });
    return (
        <Formik
            initialValues={{ text: "" }}
            validateOnBlur
            onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
            validationSchema={validationSchema}
        >
            {({ values, handleChange, handleBlur, handleSubmit, dirty, isValid }) => (
                <Form className={`${styles.form} form`}>
                    <div className={`${styles.item} item`}>
                        <label>
                            <Field
                                name="text"
                                as="textarea"
                                placeholder="Enter new post text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.text}
                            />
                        </label>
                        <ErrorMessage
                            className={`${styles.error} error`}
                            name="text"
                            component="div"
                        />
                    </div>
                    <div className={`${styles.item} item`}>
                        <button
                            type="submit"
                            disabled={(!isValid && !dirty) || (values.text.length === 0)}
                            onClick={() => addPost(values)}
                        >
                            Add post
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PostsForm;