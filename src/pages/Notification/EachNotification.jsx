import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewBadge from '../../components/NewBadge'

export const EachNotification = () => {
    return (
        <article className="review_item mb-3 card rounded">
            <div className="review_usr_dt">
                <img src="images/left-imgs/img-1.jpg" alt="" />
                <div className="rv1458">
                    <h4 className="tutor_name1">Emyboy Liked your post</h4>
                    <span className="time_145">2 hour ago</span>
                    <NewBadge />
                </div>
            </div>
        </article>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EachNotification)
