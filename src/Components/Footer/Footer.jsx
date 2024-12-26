import React from 'react';
import FooterInfo from '../FooterInfo'
import SocialMedia from '../SocialMedia'

function Footer() {
  return (
    <footer>
        <div className='footer-main'>
          {
            FooterInfo.map(items => <div className='footer-card'>
              <h3>{items.name}</h3>
              {
                items.Links.map(item => <a href='#f'>{item.link}</a>)
              }
            </div>)
          }
        </div>
        <div className='SocialMedia'>
        {
          SocialMedia.map(item => <img src={item.src} alt='social'/>)
        }
        </div>
        <div className='CopyRight'>
        &copy;CopyRight 2021
        </div>
      </footer>
  )
}

export default Footer
