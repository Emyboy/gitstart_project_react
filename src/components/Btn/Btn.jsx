import React from 'react';
import { Spinner } from 'react-activity';
import { Button } from 'react-bootstrap'
import { string, func, object, bool } from 'prop-types';
import './Btn.css';

const Btn = ({
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

Btn.propTypes = {
    text: string.isRequired,
    disabled: bool,
    className: string,
    loading: bool,
    onClick: func,
    id: string,
    style: object
}

export default Btn;