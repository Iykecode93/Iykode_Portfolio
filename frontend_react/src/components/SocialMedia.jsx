import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://twitter.com/OparahJohnbosco?s=20' target='_blank'><BsTwitter /></a>
        </div>
        <div>
            <a href='https://www.facebook.com/john.iyke.35' target='_blank'><FaFacebookF /></a>
        </div>
        <div>
            <a href="https://instagram.com/john.iyke.35" target='_blank'><BsInstagram /></a>
        </div>
        <div>
            <a href="https://wa.me/2348034569390" target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a>
        </div>
    </div>
  )
}

export default SocialMedia