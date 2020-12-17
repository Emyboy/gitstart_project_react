import React from 'react'
import { string, func } from 'prop-types';

export default function TextArea({
    placeholder,
    onChange,
    className,
    rows
}) {
    return (
        <textarea
            onChange={e => onChange(e)}
            className={`form-control ${className ? className : null}`}
            placeholder={placeholder}
            rows={rows}
            style={{ fontSize: '18px' }}
        />
    )
}

TextArea.propTypes = {
    placeholder: string,
    onChange: func.isRequired,
    classname: string,
    rows: string
}
