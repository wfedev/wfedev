import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuIcon = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-right: 40px;

  .icon {
    display: inline-block;
    width: 40px;
    height: 2px;
    margin: 0 0 10px 0;
    background: #707070;
    transition: all 0.4s ease-out;
  }

  &:hover .icon {opacity: .6}


  @media all and (max-width:1020px) {
    padding-right: 20px;
  }
  
  @media all and (max-width:650px) {
    padding-right: 0px;
    .icon {width: 30px;}
  }
  
`

export default function menu() {
  return (
    <>
      <Link to ={"/nav"}>
        <MenuIcon>
          <li className="icon"></li>
          <li className="icon"></li>
        </MenuIcon>
      </Link>
    </>
  );
}