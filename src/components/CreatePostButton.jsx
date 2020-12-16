import React, { useState } from 'react'
import Btn from './Btn/Btn'
import CreatePostModal from './CreatePostModal/CreatePostModal'


export default function CreatePostButton() {
    const [show, setShow] = useState(false);
    return (
        <>
            <CreatePostModal
                show={show}
                handleClose={() => setShow(!show)}
            />
            <div style={{ position: 'fixed', right: '20px', bottom: '40px', }}>
                <Btn
                    onClick={() => {
                        setShow(!show);
                        console.log(show);
                    }}
                    text={'+'}
                    style={{ borderRadius: '100px', fontSize: '37px', width: '68px', zIndex: '30', }}
                    className='shadow-lg'
                />
            </div>
        </>
    )
}
