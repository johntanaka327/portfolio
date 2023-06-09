import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/sam.jpg';
import profile from '../../config/profile';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div style={{ color: 'black', fontWeight: 'bold' }} className='tagtop'>
          # programmer_life
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # hello_world
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # coding
        </div>
        <h1>
          <Link smooth to='/#start' className='h1_links'>
            {profile.full_name}
          </Link>
        </h1>

        {/* <img src={logo} /> */}
        <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
          <a
            href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
            rel='opener noreferrer'
            target='_blank'
            className='fa fa-envelope'
          ></a>{' '}
          {profile.email}
        </p>

        <ul className='sidebar-nav'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
              Interest
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#experience' className='links'>
              Professional Experience
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#education' className='links'>
              Education
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className='flip-card-back'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-icons'>
              <a
                href={`mailto:${profile.email}`}
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/mittalsam98'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-linkedin fa-lg'
              ></a>
            </li>
            {/* <li className='sidebar-nav-icons'>
              <a
                href='https://twitter.com/Sachin_Mittal98'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-twitter fa-lg'
              ></a>
            </li> */}
            {/* <li className='sidebar-nav-icons'>
              <a
                href='https://www.instagram.com/decent_sachin.mittal/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-instagram fa-lg'
              ></a>
            </li> */}
            {/* <li className='sidebar-nav-icons'>
              <a
                href='https://www.facebook.com/profile.php?id=100011989067867'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-facebook fa-lg'
              ></a>
            </li> */}
          </ul>
        </div>
        <div
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '30%'
          }}
          className='tagtop'
        >
          Made with{' '}
          <a href='#' style={{ textDecoration: 'none' }} className='fa fas fa-heart fa-lg'></a> by
          me.
        </div>
      </div>
    );
  }
}

export default Sidebar;
