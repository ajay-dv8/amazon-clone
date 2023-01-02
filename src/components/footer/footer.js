import React from 'react'
import './footer.css'
import { 
    LinkedIn, Phone, Telegram, WhatsApp, GitHub 
} from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='ac'>
            <h3 className='fTitle'>Ac</h3>
            <br/>
            <p>Phone :</p>
            <p>(+233) 550 - 414 - 170</p>
              
            <p>email :</p>
            <p>ajaydives3@gmail.com</p>
            
            <p>Location :</p>
            <p>Accra / Koforidua (GH)</p>
        </div>

        <div className='socials'>
            <h3 className='fTitle'>Socials</h3>

            <br/>
            <div className='muiIcons'>
                <a href='#'>
                    <Telegram className='icon muiTelegram'/>
                </a>
                <a href='#'>
                    <WhatsApp className='icon muiWhatsApp'/>
                </a>
                <a href='#'>
                    <GitHub className='icon muiGitHub'/>
                </a>
                <a href='#'>
                    <LinkedIn className='icon muiLinkedIn'/>
                </a>
                <a href='#'>
                    <Phone className='icon muiPhone'/>
                </a>
            </div>
        </div>

        <div className='about'></div>
    
    </div>
  )
}

export default Footer;