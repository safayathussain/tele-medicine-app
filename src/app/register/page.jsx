import LoginForm from '@/components/form/LoginForm'
import React from 'react'

const Register = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <LoginForm step={'register'}/>
        </div>
    )
}

export default Register