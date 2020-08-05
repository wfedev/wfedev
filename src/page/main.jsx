import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
* {margin: 0; padding: 0;}
width: 100%;

.scrollingBanner {position: relative; width: 100%; height: 100vh; display: flex; overflow: hidden;}
.scrollingBanner div {position: relative; width: 75%; background: #151515; overflow: hidden;}
.scrollingBanner div:nth-child(1) {width: 25%; background: url(https://user-images.githubusercontent.com/54713067/87456802-69007400-c642-11ea-80e7-21442c4eaee6.png); background-size: cover;}
.scrollingBanner div:nth-child(1) h2 a {text-decoration: none; -webkit-text-stroke: 1px; -webkit-text-stroke-color: #fff; -webkit-text-fill-color: transparent; left: 100%;}
.scrollingBanner div h2 {position: relative;}
.scrollingBanner div h2 a {text-decoration: none; position: absolute; white-space: nowrap; font-size: 15em; color: #222; line-height: 165vh; animation: animate 60s linear infinite; height: 30%; bottom: 0;}
.scrollingBanner div h2:hover a {color: #000;}
.scrollingBanner div:nth-child(1) h2:hover a {text-decoration: none; -webkit-text-stroke: 1px; -webkit-text-stroke-color: #000; -webkit-text-fill-color: transparent; left: 100%;}

.left {background: none; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -ms-transform: rotate(-90deg); -o-transform: rotate(-90deg); color: #bbb; text-align : right; font-size: 1.2rem; position: absolute; top: 320px; left: -250px; z-index: 2;}
.left:hover {opacity: .8;}

.right {position: absolute; top: 35px; right: 40px; z-index: 2; display: flex; align-items: center;}
.right p {color: #555; margin-right: 15px;}
.right span {width: 180px; border-bottom: 1px solid #444; height: 2px;}
.right:hover {opacity: .8;}

@keyframes animate {
  0% {transform: translateX(0);}
  100% {transform: translateX(-100%);}
}

@media all and (max-width:768px) {
  .scrollingBanner div:nth-child(1) {width: 30%;}
  .scrollingBanner div h2 a {font-size: 9.5em; line-height: 175vh;}

  .left p {font-size: 0.875rem;}
  .left {top: 240px; left: -180px;}
  .right span {width: 70px;}
}
`

export default function main() {
    return (
      <Wrap>
        <Link to={"/nav"}>
          <div className="left">
            <p>Resume / Graphic Design / Web Design & Publising</p>
            <p>UIUX WebApp Design / Data visualization & Infographic</p>
          </div>
        </Link>
        <Link to={"/nav"}>
          <div className="right">
            <p>2012-2020</p>
            <span></span>
          </div>
        </Link>
        <section className="scrollingBanner">
          <div>
            <h2><Link to={"/nav"}>Interaction designer & Front end developer.</Link></h2>
          </div>
          <div>
            <h2><Link to={"/nav"}>Interaction designer & Front end developer.</Link></h2>
          </div>
        </section>
      </Wrap>
    );
}

