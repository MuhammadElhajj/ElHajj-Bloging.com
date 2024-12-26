import React from 'react'
import MianPhoto from '../images/Mian.jpeg'
import ProfilePhoto from '../images/Profile Photo.jpeg'
import { BiHeart } from 'react-icons/bi'
import { BiComment } from 'react-icons/bi'
import { CgAdd } from 'react-icons/cg'
import AutherInfo from '../Components/AuthersInfo'


function Home({follow , setFollow , followClick}) {


  return (
    <div className='Home'>
      <h2 className='Home__h2'>Editor's Pick</h2>
      <p className='Home__p'>Discover the most outstanding articled in all topics of life .</p>
      <div className='Post-main-home'>
        <div className='main-post'>
          <button onClick={followClick}>{follow ? "Unfollow" : "Follow"}</button>
          <h2>Lenovo's smarter devices stoke professional passions</h2>
          <div className='Account-ifno'>
            <img src={ProfilePhoto} alt='ProfilePhoto' className='ProfilePhoto' />
            <div className='Name-data'>
              <h4>Lorem Porta</h4>
              <p>23 May 2024</p>
            </div>
          </div>

          <div className='React-part'>
            <div className='love-comment'>
              <span><BiHeart className='heart' /> 34</span>
              <span><BiComment className='comment' /> 432</span>
            </div>
            <div className='Saved-part'>
              <CgAdd className='save' />
            </div>
          </div>
        </div>
        <img src={MianPhoto} alt='Main Phote' className='MianPhoto' />
      </div>
      <h2 className='Home__h2'>Newest Authers</h2>
      <p className='Home__p'>Say Hello to future creator potentials  .</p>

      <div className='row Auther-Part'>
        {
          AutherInfo.map(item => <div className='col-6 col-lg-3 col-md-4 auther-card-main'><div className='Auther-card'>
            <img src={item.background} alt='Auther' className='background-auther' />
            <div className='Auther-name'>
              <img src={item.profile} alt='' className='profile-auther' />
              <span>
                <h2 className='Auther-name-h2'>{item.name}</h2>
                <h5 className='Auther-name-h5'>{item.Link}</h5>
              </span>
            </div>
            <div className='Subsicribe-button'>
              {
                item.Showed && item.Showed.length > 0 ?
                item.Showed.map(items => <span className='span-artical'>{items.Artical}</span>)
                : null
              }
            </div>
          </div>
          </div>)
        }
      </div>


    </div>
  )
}

export default Home
