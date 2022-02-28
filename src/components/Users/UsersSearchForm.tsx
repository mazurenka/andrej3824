import {Form, Formik} from "formik";
import {Field} from "redux-form";
import React from "react";

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}
type UsersSearchFormValidateType = {
    term: string
}
export const UsersSearchForm = () => {

    const submit = (values: UsersSearchFormValidateType,
                    {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

    }

    return <div>
        <Formik
            initialValues={{term: ''}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}