import React from 'react'
import { Form } from 'react-bootstrap';

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
