import React, { Component } from 'react'
import { connect } from 'react-redux'
import EachNotification from './EachNotification'

export const Notification = () => {
    return (
        <div className='container' style={{ marginTop: '80px' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div className='col-lg-7'>
                    <div className='text-center'>
                        <h6 className='h6 m-0'>Today</h6>
                        <hr />
                    </div>
                    <EachNotification />
                    <EachNotification />
                    <EachNotification />
                    <EachNotification />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
