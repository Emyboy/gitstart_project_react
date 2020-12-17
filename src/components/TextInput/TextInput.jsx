import React from 'react';
import { Form } from 'react-bootstrap'
// import { func, string, object } from 'prop-types'
import { string, bool, func, object } from 'prop-types';

const TextInput = ({
    className,
    placeholder,
    onChange,
    disabled,
    id,
    type,
    name,
    title,
    value,
    required,
    label,
    maxlength,
    error
}) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                disabled={disabled}
                required={required}
                onChange={e => onChange(e)}
                value={value}
                className={className}
            />
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form.Group>
    )
}

TextInput.propType = {
    className: string,
    placeholder: string,
    onChange: func.isRequired,
    disabled: bool,
    id: string,
    type: string,
    name: string,
    title: string,
    value: string,
    required: bool,
    label: string,
    maxlength: string,
    error: string
}

export default TextInput;