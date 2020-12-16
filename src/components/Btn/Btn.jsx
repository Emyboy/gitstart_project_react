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
            onClick={onClick}
        >
            {loading ? <Spinner size={10} className='mt-1' color='white' /> : text}
        </Button>
    )
}