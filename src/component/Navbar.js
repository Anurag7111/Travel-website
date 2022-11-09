import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <>
        <Nav>
            <div className="brand">
                {/* <div className="container"> */}
                    <img src={logo} alt="" />
                    Let's Travel
                {/* </div> */}
            </div>
            <div className="toggle">
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#recommend">Places</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
              <button>Connect</button>
            </div>
        </Nav>
    </>
  )
}

const Nav = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  .brand {
    width: 30%;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
  }
  .toggle {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 63%;
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    margin: 0px 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    text-align: start;
    .brand {
      width: 100%;
    }
    .toggle {
      display: none;
    }
  }
`;