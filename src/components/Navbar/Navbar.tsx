"use client"
import React from 'react'
import logo from '@/assets/logo.png'
import { IoIosBody } from 'react-icons/io'
import { FiLogOut, FiLogIn } from 'react-icons/fi'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthPopup from '../AuthPopup/AuthPopup'

const Navbar = () => {
    const [isloggedin, setIsloggedin] = React.useState<boolean>(false)
    const [showpopup, setShowpopup] = React.useState<boolean>(false)
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    
    const checklogin = async () => {
        setIsLoading(true)
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/checklogin', {
            method: 'POST',
            credentials: 'include',
        })
            .then(res => res.json())   
            .then(data => {
                if (data.ok) {
                    setIsloggedin(true)
                }
                else{
                     setIsloggedin(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    React.useEffect(() => {
        checklogin()
    }, [showpopup])

    return (
        <nav>
            <div className="nav-logo" onClick={() => window.location.href='/'}>
                <Image src={logo} alt="FitFreak Logo" priority />
                <span className={isLoading ? 'loading-text' : ''}>FREAKS</span>
            </div>

            <div className="nav-links">
                <Link href='/'>Home</Link>
                <Link href='/about'>Nutrition</Link>
                <Link href='/report/Workout'>Workouts</Link>
                <Link href='/profile' className="profile-icon"><IoIosBody /> Profile</Link>
            </div>

            <div className="nav-actions">
                {
                    isloggedin ?
                        <button className="auth-btn">
                            Logout <FiLogOut />
                        </button>
                        :
                        <button
                            className="auth-btn primary"
                            onClick={() => {
                                setShowpopup(true)
                            }}
                        >
                            Login <FiLogIn />
                        </button>
                }
            </div>

            {
                showpopup && <AuthPopup setShowpopup={setShowpopup} />
            }
        </nav>
    )
}

export default Navbar