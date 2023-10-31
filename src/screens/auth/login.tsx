import React from 'react'
import { loginEndpoint } from '../../spotify'

export default function Login() {
    return (
        <div>
            <a
                href={loginEndpoint}>
                Login
            </a>
        </div>
    )
}
