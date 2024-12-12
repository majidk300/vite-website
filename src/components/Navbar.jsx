import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {

  const Nav = styled.nav`
    .navbar-list {
      display: flex;  
      gap: 4.8rem;

      li{
      list-style: none;

      .navbarlink {

        &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
            
         }

         &:hover,
         &:active {
         color: ${({theme}) => theme.colors.helper};
         }
      }

      }

    }
  `;

  return (
    <Nav>
    <div className='menuIcon'>
      <ul className='navbar-list'>
        <li>
          <NavLink className="navbarlink" to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/about" >About</NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/service" >Services</NavLink>
        </li>
        <li>
          <NavLink className="navbarlink" to="/contact" >Contact</NavLink>
        </li>
      
      </ul>
    </div>

    </Nav>
  );

};

export default Navbar