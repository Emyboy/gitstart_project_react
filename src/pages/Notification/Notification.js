import React, { Component } from 'react'
import { connect } from 'react-redux'
import EachNotification from './EachNotification'

export const Notification = () => {
    return (
        <div className='container' style={{ marginTop: '80px'}}>

            <EachNotification />
            <EachNotification />
            <EachNotification />
            <EachNotification />

        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
