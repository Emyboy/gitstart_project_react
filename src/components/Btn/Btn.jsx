import React from 'react';
import { Spinner } from 'react-activity';
import { Button } from 'react-bootstrap'
import './Btn.css';

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
            className={"btn btn-primary w-100 btn_ mt-3 "+ className}
            disabled={disabled}
        >
            {loading ? <Spinner color='white' /> : text}
        </Button>
    )
}