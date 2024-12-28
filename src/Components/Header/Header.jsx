import React from 'react'
import { BsTriangleFill } from 'react-icons/bs';
import HeaderIcon from '../HeaderIcon';
import HeaderLinks from '../headerLinks';
import Logo from '../../images/Logo.jpg'
import { FaBars } from 'react-icons/fa';


function Header({OpenSidebar}) {
  return (
    <header className='Header'>
    <div className='Logo__Part'>
      <img src={Logo} alt='Logo' className='Logo' />
      <h2 className='Web__name'>Bloging</h2>
    </div>
    <div className='Links__Part'>
      {
        HeaderLinks.map((items, index) => <a href= {items.path} className="Link" >
          <span>{items.name}</span>
          <span className='AngleDown'>{items.icon}</span>

          {items.Content && items.Content.length > 0 ? <div className='main-Content-header-link '>
            {
              items.Content && items.Content.length > 0 ?
                items.Content.map(item => <div className='Content-header-link'>

                  <BsTriangleFill className='FaAnglesDown' />
                  <a href={item.path}>{item.Name}</a>
                  <p>{item.p}</p>
                  
                </div>

                )

                : null
            }
          </div> : null}

        </a>
        )

      }
    </div>
    <div className='Search__Notification__profile__Part'>
      {HeaderIcon.map(item => <a href='#d' className='Icons'>{item.icon}</a>)}
    </div>
    <FaBars className='FaBars' onClick={OpenSidebar}/>
  </header>
  )
}

export default Header
