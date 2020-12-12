import React from 'react';
import Btn from '../../components/Btn/Btn';
import TextInput from '../../components/TextInput/TextInput';
import { Form, Button } from 'react-bootstrap'
import DropDown from '../../components/DropDown/DropDown';

export default () => {
    return (
        <div style={{ background: 'inherit' }}>
            <div className="container">
                <div className="row justify-content-lg-center justify-content-md-center">
                    <div className="col-lg-12">
                        <div className="main_logo25" id="logo">
                            <a href="index.html"><img src="images/logo.svg" alt="" /></a>
                            <a href="index.html"><img className="logo-inverse" src="images/ct_logo.svg" alt="" /></a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-8">
                        <div className="sign_form p-3">
                            <h2>Welcome Back</h2>
                            <p>Log In to Your Edututs+ Account!</p>
                            <Form style={{ textAlign: 'start' }}>
                                <TextInput
                                    label="First Name"
                                    name='firstName'
                                    placeholder='firstName'
                                    type='text'
                                    onChange={() => { }}
                                />
                                <TextInput
                                    label="Lat Name"
                                    name='lastName'
                                    placeholder='lastName'
                                    type='text'
                                    onChange={() => { }}
                                />
                                <TextInput
                                    label="Username"
                                    name='username'
                                    placeholder='Username'
                                    type='text'
                                    onChange={() => { }}
                                />

                                <TextInput
                                    label="Email"
                                    placeholder='Email'
                                    type='email'
                                    name='email'
                                    onChange={() => { }}
                                />

                                <DropDown
                                    label='Gender'
                                    options={['male', 'female']}
                                    onChange={e => { }}
                                />

                                <TextInput
                                    label="Password"
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    onChange={() => { }}
                                />

                                <Btn
                                    text='Register'
                                />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

