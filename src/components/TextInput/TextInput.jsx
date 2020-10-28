import React from 'react';

export default ({
    className,
    placeholder,
    onChange,
    disabled,
    id,
    type,
    name,
    title,
    label
}) => {
    return (
        <>
            <label for="firstname" className="sr-only">{label}</label>
            <input id={id} className={"form-control input-group-lg" + className} type={type} name={name} title={title} placeholder={placeholder} />
        </>
    )
}

