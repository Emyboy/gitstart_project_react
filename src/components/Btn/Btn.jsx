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
    id,
    style
}) => {
    return (
        <Button
            className={"btn btn-primary btn_ mt-3 "+ className}
            disabled={disabled}
            style={style}
        >
            {loading ? <Spinner color='white' /> : text}
        </Button>
    )
}