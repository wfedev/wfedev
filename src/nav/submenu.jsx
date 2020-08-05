import React from 'react';
import styled from 'styled-components';

const Wrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  span {border: 1px solid #C1C1C1; margin: 0 10px; height: 20px;}
  a:hover {color: #E37007;}
  .active {color: #E37007;}
  a {padding: 20px 40px;}
  position: relative;
  font-size: 1rem;

  @media all and (max-width:1020px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0;
    span {height: 10px;}
    a {padding: 10px;}
  }
`

export default function submenu(props) {
  return (
    <>
      <Wrap>
        {props.children}
      </Wrap>
    </>
  );
}