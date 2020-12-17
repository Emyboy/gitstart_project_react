import React, { useState } from 'react';
import Btn from '../../components/Btn/Btn';
import TextInput from '../../components/TextInput/TextInput';
import { Form } from 'react-bootstrap'
import DropDown from '../../components/DropDown/DropDown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/auth.action'

const mapDispatchToProps = {
    Signup: signup
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(({
    auth,
    Signup
}) => {
    const [data, setData] = useState({
        firstName: null,
        lastName: null,
        email: null,
        username: null,
        password: null,
        gender: 'male',
    })
    const handleSubmit = () => {
        Signup(data);
    }
    return (
        <div style={{ background: 'inherit' }}>
            <div className="container">
                <div className="row justify-content-lg-center justify-content-md-center pt-5">
                    <div className="col-lg-6 col-md-8 mt-5">
                        <div className="sign_form p-3">
                            <h2>Signup</h2>
                            <p className='mb-2'>Create Your First Account</p>
                            <Form style={{ textAlign: 'start' }}>
                                <TextInput
                                    label="First Name"
                                    name='firstName'
                                    placeholder='First Name'
                                    type='text'
                                    onChange={e => setData({ ...data, firstName: e.target.value })}
                                />
                                <TextInput
                                    label="Lat Name"
                                    name='lastName'
                                    placeholder='Last Name'
                                    type='text'
                                    onChange={e => setData({ ...data, lastName: e.target.value })}
                                />
                                <TextInput
                                    label="Username"
                                    name='username'
                                    placeholder='Username'
                                    type='text'
                                    onChange={e => setData({ ...data, username: e.target.value })}
                                />

                                <TextInput
                                    label="Email"
                                    placeholder='Email'
                                    type='email'
                                    name='email'
                                    onChange={e => setData({ ...data, email: e.target.value })}
                                />

                                <DropDown
                                    label='Gender'
                                    options={['male', 'female']}
                                    onChange={e => setData({ ...data, gender: e.target.value })}
                                />

                                <TextInput
                                    label="Password"
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    onChange={e => setData({ ...data, password: e.target.value })}
                                />

                                <Btn
                                    text='Register'
                                    className='w-100'
                                    loading={auth.authLoading}
                                    onClick={handleSubmit}
                                />
                            </Form>
                            <p className='mb-0 mt-3'>Already have an account ? <Link to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
});

