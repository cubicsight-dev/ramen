import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black border-t-4 border-red-700 py-3">
            <div className="custom-container bg">
                <h5 className="text-center mb-4">Your Logo</h5>
                <p className="text-center text-xs">Your Company © {(new Date()).getFullYear()}, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer