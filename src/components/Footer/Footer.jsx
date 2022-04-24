import React from 'react'
import schema from './data'
import s from './Footer.scss'

const Footer = () => {
    if (!schema) return null
    const { text } = schema
    return (
        <footer>
            <section id="footer" className={`py-5 ${s.bgblack}`}>
                <p className="py-5 text-center text-white">{text}</p>
            </section>
        </footer>
    )
}

export default Footer
