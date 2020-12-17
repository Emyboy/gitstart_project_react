import React from 'react';
import { string, bool, array } from 'prop-types';

const DropdownSelect = ({
    label,
    disabled,
    option,
    id
}) => {
    return (
        <>
            <label for="month" className="sr-only"></label>
            <select className="form-control" id="day">
                <option value="Day" disabled="" selected="">Day</option>
                {
                    option.map((val, i) => {
                        return <option key={i}>{val}</option>
                    })
                }
            </select>
        </>
    )
};

DropdownSelect.propTypes = {
    label: string,
    disabled: bool,
    option: array.isRequired
}

export default DropdownSelect;

