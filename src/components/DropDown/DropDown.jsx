import React from 'react'
import { Form } from 'react-bootstrap';
import { string, func, array } from 'prop-types';

export default function DropDown({
    label,
    onChange,
    options
}) {
    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>{label}</Form.Label>
            <Form.Control as="select" onChange={e => onChange(e)}>
                {
                    options.map((val, i) => <option key={i}>{val}</option>)
                }
            </Form.Control>
        </Form.Group>
    )
}

DropDown.propTypes = {
    label: string,
    onChange: func.isRequired,
    option: array.isRequired
}
