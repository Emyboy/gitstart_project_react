import React, { Component } from 'react'
import { connect } from 'react-redux'

export const EachNotification = () => {
    return (
        <article className="review_item mb-3 card rounded">
            lorem
            lorem
            lorem
            lorem
        </article>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EachNotification)
