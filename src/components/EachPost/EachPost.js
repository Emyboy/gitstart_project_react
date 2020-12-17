import React, { useState } from 'react'
import { connect } from 'react-redux'
import EachReply from './EachReply'
import { FiHeart, FiMessageCircle, FiEdit2, FiTrash } from "react-icons/fi";
import NewBadge from '../NewBadge';
import TextArea from '../TextArea/TextArea';
import { Link } from 'react-router-dom';
import Btn from '../Btn/Btn';
import { object } from 'prop-types';

const EachPost = ({
    data,
    auth
}) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(true);
        setTimeout(() => {
            setLiked(false);
        }, 3000);
    }

    return (
        <article className="review_item mb-3 card rounded">
            {
                liked ? <img src='https://i.gifer.com/6ob.gif' style={{
                    position: 'absolute',
                    width: '80%',
                    left: '80px',
                    zIndex: '10',
                    height: '450px'
                }} alt='' /> : null
            }
            <div className="review_usr_dt">
                <img src="images/left-imgs/img-1.jpg" alt="" />
                <div className="rv1458">
                    <Link to='/user/emyboy'>
                        <h4 className="tutor_name1">John Doe</h4>
                    </Link>
                    <span className="time_145">2 hour ago</span>
                </div>
            </div>
            <div className="rating-box mt-20">
                {/* <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt="post-image" className="img-responsive post-image" /> */}
            </div>
            <Link to='/post/637'>
                <p className="rvds10">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
            </Link>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="user_dt_right">
                    <ul>
                        <li onClick={() => handleLike()}>
                            <a href="#" className="lkcm152"><FiHeart size={15} /><span>1452</span></a>
                        </li>
                        <li>
                            <a href="#" className="lkcm152 ml-2"><FiMessageCircle size={15} /><span>100</span></a>
                        </li>

                    </ul>
                </div>
                <div className="user_dt_right">
                    <ul>
                        <li>
                            <a href="#" className="lkcm152"><FiEdit2 size={15} /><span>1452</span></a>
                        </li>
                        <li>
                            <a href="#" className="lkcm152 ml-2"><FiTrash size={15} /><span>100</span></a>
                        </li>

                    </ul>
                </div>
            </div>
            <hr />

            <EachReply />
            <NewBadge />
            {/* <div className="post-comment">
                <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                <input type="text" className="form-control" placeholder="Post a comment" />
            </div> */}
            <div className="review_usr_dt">
                <img src="images/left-imgs/img-1.jpg" alt="" />
                <div className="rv1458 w-100">
                    {/* <input type="text" className="form-control mt-2" placeholder="Post a comment" /> */}
                    <TextArea
                        onChange={e => { }}
                        placeholder="Post a comment"
                    />
                </div>
                <Btn text='Add' className='mb-3 ml-2' />
            </div>
        </article>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

EachPost.propTypes = {
    data: object.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EachPost);
// export default connect(mapStateToProps, mapDispatchToProps)(EachPost)
