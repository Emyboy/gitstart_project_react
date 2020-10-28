import React from 'react';
import { Spinner } from 'react-activity';
import { Button } from 'react-bootstrap'

export default ({
    text,
    disabled,
    className,
    loading,
    onClick,
    id
}) => {
    return (
        <Button
            className={"btn btn-primary w-100 "+ className}
            disabled={disabled}
        >
            {loading ? <Spinner color='white' /> : text}
        </Button>
    )
}