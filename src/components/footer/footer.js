import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'
import { 
    LinkedIn, Phone, Telegram, GitHub 
} from '@mui/icons-material'

const Footer = () => {

  const navigate = useNavigate();
  
  function toPortfolio(){
    navigate("https://dv8portfolio.netlify.app/");
  }

  return (
    <div className='footer_container'>
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

        <div className='abt_dev'>
            <h3 className='fTitle'>Developer</h3>
            <br/>
            <div className='dev_list'>
                <span>Ajay Dives</span>
                <span onClick={toPortfolio}>Portfolio</span>
                <span>Contact</span>
                <span>Team</span>
            </div>
        </div>

        <div className='socials'>
            <h3 className='fTitle'>Socials</h3>

            <br/>
            <div className='muiIcons'>
                <a href='#'>
                    <Telegram className='icon muiTelegram'/>
                </a>
                <a href='https://github.com/ajay-dv8'>
                    <GitHub className='icon muiGitHub'/>
                </a>
                <a href='#'>
                    <LinkedIn className='icon muiLinkedIn'/>
                </a>
                <a href='tel:+233550414170'>
                    <Phone className='icon muiPhone'/>
                </a>
            </div>
        </div>
    
    </div>
    <hr style={{borderColor:'black'}}/>
        <div className='footer_bottom'>
            
            <div className='f_contact_info'>
                <span>email: ajaydives3@gmail.com | </span>
                <span>phone: +2335 5041 4170</span>
            </div>
            <div>
                <span className='copyright_info'>
                2023 copyright | dv8 | Ajay Dives.  
                All rights reserved.
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer;