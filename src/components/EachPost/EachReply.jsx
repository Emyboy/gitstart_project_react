import React from 'react'
import { connect } from 'react-redux';

function EachReply({
    type,
    data,
    auth
}) {
    return (
        <>
            <div className={`post-detail ${type === 'reply' ? 'pl-5': null}`}>
                <div className="review_item">
                    <div className="review_usr_dt">
                        <img src="images/left-imgs/img-1.jpg" alt="" />
                        <div className="rv1458">
                            <h4 className="tutor_name1">John Doe</h4>
                            <span className="time_145">2 hour ago</span>
                        </div>
                    </div>
                   
                    <p className="rvds10">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                    
                </div>
            </div>
            
        </>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)(EachReply);

