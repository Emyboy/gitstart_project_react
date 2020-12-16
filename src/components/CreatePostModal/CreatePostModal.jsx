import React from 'react'
import { Modal } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import TextArea from '../TextArea/TextArea';

export default function CreatePostModal({
    show,
    handleClose
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <div class="review_usr_dt">
                    <img src="images/left-imgs/img-1.jpg" alt="" />
                    <div class="rv1458">
                        <a href="/user/emyboy">
                            <h4 class="tutor_name1">John Doe</h4>
                        </a>
                        <span class="time_145">2 hour ago</span>
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
