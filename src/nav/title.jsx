import React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  font-size: 50px;
  p {width: 100%; text-align: center; margin-left: 80px; font-size: 2.2rem;}
  span {font-size: 1rem;}

  @media all and (max-width:1020px) {
    p {width: 100%; text-align: left; margin-left: 0px; font-size: 1.875rem;}
    overflow: hidden;
  }
`

export default function submenu(props) {
  return (
    <>
      <Wrap>
        <p></p>
        {props.children}
      </Wrap>
    </>
  );
}