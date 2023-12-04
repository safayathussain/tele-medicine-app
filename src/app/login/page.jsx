import LoginForm from '@/components/form/LoginForm'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='h-screen flex items-center justify-center'>
                <LoginForm step={'login'} />
            </div>
        </div>
    )
}

export default page