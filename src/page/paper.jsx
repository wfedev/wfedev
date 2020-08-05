import React from 'react';
import styled from 'styled-components';
import Wrap from './wrap';

const Paper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 margin: 70px 0;
 padding: 50px;
 background-color: #fff;
 box-shadow: 5px 5px 10px 5px #f1f1f1;
 width: 900px;
 a {color: #333; text-decoration: none;}
 img {width: 900px; margin-top: 30px;}
 h2 {margin-top: 50px; text-align: center;}

 @media all and (max-width:1020px) {
    width: 105%;
    padding: 20px;
    margin: 30px 0;
    img {width: 100%;}
 }
`

export default function paper(props) {
    return (
        <Wrap>
            <Paper>
               {props.children}
            </Paper>
        </Wrap>
    );
}