import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div className="wrapper coming_soon_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cmtk_group">
                            <div className="ct-logo">
                                {/* <a href="index.html"><img src="images/ct_logo.svg" alt="" /></a> */}
                            </div>
                            <div className="cmtk_dt">
                                <h1 className="title_404">404</h1>
                                <h4 className="thnk_title1">The page you were looking for could not be found.</h4>
                                <Link to="/" className="bk_btn">Go To Homepage</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
