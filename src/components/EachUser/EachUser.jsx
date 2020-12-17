import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn'
import { object } from 'prop-types';

export default function EachUser({
    data
}) {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="review_usr_dt">
                    <img src="images/left-imgs/img-1.jpg" alt="" />
                    <div className="rv1458">
                        <Link to="/user/emyboy">
                            <h4 className="tutor_name1">John Doe</h4>
                        </Link>
                        <span className="time_145">2 hour ago</span>
                    </div>
                </div>
                <div>
                    <Btn text='Follow +' />
                </div>
            </div>
            <hr />
        </>
    )
}

EachUser.propTypes = {
    data: object
}
