import React from 'react'
import { Modal } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import TextArea from '../TextArea/TextArea';
import { bool, func } from 'prop-types';

export default function CreatePostModal({
    show,
    handleClose
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <div className="review_usr_dt">
                    <img src="images/left-imgs/img-1.jpg" alt="user avatar" />
                    <div className="rv1458">
                        <a href="/user/emyboy">
                            <h4 className="tutor_name1">John Doe</h4>
                        </a>
                        <span className="time_145">2 hour ago</span>
                    </div>
                </div>
                <hr />
                <TextArea 
                    placeholder='Type your post here'
                    rows='5'
                />
                <div className='text-center'>
                    <Btn text='Create Post' className='w-50' />
                </div>
            </Modal.Body>
        </Modal>
    )
}

CreatePostModal.propTypes = {
    show: bool.isRequired,
    handleClose: func.isRequired
}
