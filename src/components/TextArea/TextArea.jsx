import React from 'react'

export default function TextArea({
    placeholder,
    onChange,
    className
}) {
    return (
        <textarea
            onChange={e => onChange(e)}
            className={`form-control ${className ? className : null}`}
            placeholder={placeholder}
        />
    )
}
