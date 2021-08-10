import React from "react";
import { Field, Form, Formik } from "formik";
import styles from "./ProfileStatus.module.css";
import * as yup from "yup";
import { useState } from "react";

const ProfileStatusForm = (props) => {
    const validationSchema = yup.object().shape({
        status: yup.string().typeError("Value must be a string"),
    });

    return (
        <Formik
            initialValues={{
                status: props.status,
            }}
            validateOnBlur
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange,
                isInvalid = touched.login && errors.login && `${styles.invalid} invalid`,
                deactivateEditMode = () => props.deactivateEditMode(values.status) }) => {
                return (
                    <Form>
                        <Field
                            name="status"
                            type="text"
                            placeholder="Edit your status"
                            className={isInvalid}
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

const ProfileStatusHook = () => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState("");

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = (status) => {
        setEditMode(false);
        setStatus(status);
    }

        return (
            <div className={styles.statusWrapper}>
                <div className={styles.statusCaption}>Status:</div>
                    {this.state.editMode &&
                        (<div className={styles.statusContent}>
                            <ProfileStatusForm status={status} deactivateEditMode={deactivateEditMode}/>
                        </div>)}
                    {!this.state.editMode &&
                        (<div className={styles.statusContent} onDoubleClick={activateEditMode}>
                            {status || "No status"}
                        </div>)}
            </div>
        );
}

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    deactivateEditMode = (status) => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(status);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div className={styles.statusWrapper}>
                <div className={styles.statusCaption}>Status:</div>
                    {this.state.editMode &&
                        (<div className={styles.statusContent}>
                            <ProfileStatusForm status={this.state.status} deactivateEditMode={this.deactivateEditMode}/>
                        </div>)}
                    {!this.state.editMode &&
                        (<div className={styles.statusContent} onDoubleClick={this.activateEditMode}>
                            {this.state.status || "No status"}
                        </div>)}
            </div>
        );
    }
}

export default ProfileStatus;
