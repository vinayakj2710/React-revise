import React from 'react'

const nav = ({ totalCounters }) => {
    console.log("Navbar - rendered")
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand h1" href="#">Navbar <span className='badge bg-secondary badge-pill'>{totalCounters}</span></a>
                </div>
            </nav>
        </div>
    )
}

export default nav