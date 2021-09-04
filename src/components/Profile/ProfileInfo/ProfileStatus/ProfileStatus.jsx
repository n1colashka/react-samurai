import React from "react";
import { Field, Form, Formik } from "formik";
import styles from "./ProfileStatus.module.css";
import * as yup from "yup";
import { useState, useEffect } from "react";

const ProfileStatusForm = (props) => {
    const validationSchema = yup.object().shape({
        status: yup.string().typeError("Value must be a string"),
    });

    return (
        <Formik
            initialValues={{
                status: props.status,
            }}
            onSubmit={(values) => props.deactivateEditMode(values.status)}
            validateOnBlur
            validationSchema={validationSchema}
        >
            {({
                values, handleChange, submitForm,
                deactivateEditMode = () => {
                    props.deactivateEditMode(values.status);
                    submitForm();
                }
            }) => {
                return (
                    <Form>
                        <Field
                            name="status"
                            type="text"
                            placeholder="Edit your status"
                            autoFocus={true}
                            onChange={handleChange}
                            onBlur={deactivateEditMode}
                            value={values.status}
                        />
                    </Form>
                );
            }}
        </Formik>
    );
};

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = (status) => {
        setEditMode(false);
        props.updateStatus(status);
        setStatus(status);
    };

    return (
        <div className={styles.statusWrapper}>
            <div className={styles.statusCaption}>Status:</div>
            {editMode && (
                <div className={styles.statusContent}>
                    <ProfileStatusForm status={props.status} deactivateEditMode={deactivateEditMode} />
                </div>
            )}
            {!editMode && (
                <div className={styles.statusContent} onDoubleClick={activateEditMode}>
                    <span>{props.status || "No status"}</span>
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;
