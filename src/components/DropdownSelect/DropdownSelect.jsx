import React from 'react';


export default  ({
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
}

