import React from 'react'
import Btn from '../../components/Btn/Btn'
import { FiEdit2 } from "react-icons/fi";
import EachPost from '../../components/EachPost/EachPost';

export default function Profile() {
    return (
        <div style={{
            marginTop: '80px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>

                <div className='col-lg-7'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="review_usr_dt">
                                <img src="images/left-imgs/img-1.jpg" alt="" />
                                <div className="rv1458">
                                    <h4 className="tutor_name1">John Doe</h4>
                                    <span className="time_145">2 hour ago</span>
                                    <div style={{
                                        position: 'absolute',
                                        right: '0px',
                                        top: '0px'
                                    }}>
                                        <div style={{ display: 'flex' }}>
                                            <Btn
                                                text='Follow +'
                                                className='w-100'
                                                style={{
                                                    width: '40px'
                                                }}
                                            />
                                            <FiEdit2 size={25} className='ml-4 mt-3' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }} className='container'>
                                <div className='text-center'>
                                    <h4>Following</h4>
                                    <p>405</p>
                                </div>
                                <div className='text-center'>
                                    <h4>Followers</h4>
                                    <p>405</p>
                                </div>
                                <div className='text-center'>
                                    <h4>Pots</h4>
                                    <p>405</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3>Timeline</h3>
                    <div className='mt-4'>
                        <EachPost />
                        <EachPost />
                        <EachPost />
                    </div>

                </div>
            </div>
        </div>
    )
}
