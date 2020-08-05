import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Wrap from '../page/wrap';

import {TweenMax, Expo} from 'gsap';

const Close = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 50px;
  background:
    linear-gradient(45deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 48%,#ccc 48%,#ccc 52%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 100%),
    linear-gradient(135deg,#fff 0%,#fff 48%,#ccc 48%,#ccc 52%,#fff 52%,#fff 100%);

  @media all and (max-width:768px) {
    margin-right: 0;
    width: 25px;
    height: 25px;
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 3.125rem;
  margin-top: 40px;
  a:hover {color: #E37007; transition: all 0.2s ease-out;}
  a:hover .circle {fill: #E37007;}
  .cake {margin-top: 20px; padding-bottom: 0px; width: 50px;}
  .close:hover div {opacity: .6; transition: all 0.4s ease-out;}
  .area {margin-top: 210px;}

  @media all and (max-width:1020px) {
    margin-top: 10px;
    .cake {padding-bottom: 50px;}
  }
`

const Section = styled.div`
  position: relative;
  width: 800px;
  height: 50px;

  .ch {height: 120px;}
  .drawing {position: absolute; z-index: -2;}
  .sun   {top: 0;     bottom: 0; left: 200px; right: 0;}
  .pen   {top: -10px; bottom: 0; left: -10px; right: 0;}
  .code  {top: 0px;  bottom: 0; left: 530px; right: 0;}
  .res   {top: 0px; bottom: 0; left: 560px; right: 0;}
  .chart {top: 0px;   bottom: 0; left: 250px; right: 0; z-index: -2;}
  .spk   {top: 0px;   bottom: 0; left: 250px; right: 0;}
  
  svg {position:absolute; top: 0; display: block;}
  &:hover svg {display: block;}

  @media all and (max-width:1020px) {
    width: 280px;
    padding: 20px 0;
    .ch {height: 50px;}
    &:hover svg {display: none;}
    svg {display: none;}
  }
`

const Area = styled.div`
  position: relative;
  height: 60px;
  margin: 100px 0;

  .gsap {opacity: 0;}
  .h {opacity: 0;}
  
  @media all and (max-width:1020px) {
    height: 0;
    margin: 0;
    a {text-decoration: underline;}
    .gsap {font-size: 1.5rem;}
  }
`

const goBack = () => {
  window.history.back();
}

export default function nav() {
  return (
    <>
      <Wrap>
        <Inner>
          <div>
            <Link to={"/main"}><img src={require('../image/0.png')} className="cake"/></Link>
            <div className="area">
              <Section>
                <Area>
                  <p className="h gsap" ref={el => {TweenMax.to(el, .4, {opacity: 1, y: -60, ease: Expo.easeOut, delay: .3 })}}>
                    <Link to={"/resume"}>Resume</Link>
                    <svg className="drawing sun" width="47.2" height="45.154" viewBox="0 0 47.2 45.154">
                      <g transform="translate(-584.808 -174.06)">
                        <circle className="circle" cx="9.5" cy="9.5" r="9.5" transform="translate(598 187)" fill="#707070"/>
                        <g>
                          <g>
                            <path d="M2718.235,198.375l8.666-.937" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2714.253,189.944l6.324-6.558" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2705.119,184.557l2.576-8.2" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2714.253,207.275l5.621,3.982" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2703.948,212.194l3.279,8.666" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2694.111,211.257l-5.4,6.215" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2689.6,202.357l-8.6,3.279" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2689.6,193.223l-9.3-5.153" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                            <path d="M2695.751,186.665l-4.684-8.2" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="2"/>
                          </g>
                        </g>
                      </g>
                    </svg>
                </p>
                </Area>
              </Section>
              <Section>
                <Area>
                  <p className="h2 gsap" ref={el => {TweenMax.to(el, .4, {opacity: 1, y: -60, ease: Expo.easeOut, delay: .4 })}}>
                    <a href="https://j.mp/2XwtlH3" target="blank" alt="privateurl">Graphic & UI/UX</a>
                    <svg className="drawing pen" width="594.822" height="83" viewBox="0 0 594.822 83">
                      <g transform="translate(-368 -286)">
                        <g transform="translate(372 291)" fill="none" stroke="#707070" strokeWidth="1">
                          <rect width="468" height="74" stroke="none"/>
                          <rect x="0.5" y="0.5" width="467" height="73" fill="none"/>
                        </g>
                        <g transform="translate(368 286)" fill="#fff" stroke="#707070" strokeWidth="1">
                          <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
                          <circle cx="4.5" cy="4.5" r="4" fill="none"/>
                        </g>
                        <g transform="translate(835 286)" fill="#fff" stroke="#707070" strokeWidth="1">
                          <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
                          <circle cx="4.5" cy="4.5" r="4" fill="none"/>
                        </g>
                        <g transform="translate(368 360)" fill="#fff" stroke="#707070" strokeWidth="1">
                          <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
                          <circle cx="4.5" cy="4.5" r="4" fill="none"/>
                        </g>
                        <g transform="translate(835 360)" fill="#fff" stroke="#707070" strokeWidth="1">
                          <circle cx="4.5" cy="4.5" r="4.5" stroke="none"/>
                          <circle cx="4.5" cy="4.5" r="4" fill="none"/>
                        </g>
                        <g transform="translate(10 -4)">
                          <path d="M2968,317.266l.863,26.759,12.074,12.063,9.917-4.167-2.587-17.108Z" transform="translate(-2095 -2)" fill="none" stroke="#707070" strokeWidth="1"/>
                          <path d="M2969.257,319.968l10.019,20.976" transform="translate(-2095.807 -3.482)" fill="none" stroke="#707070" strokeWidth="1"/>
                          <path d="M2976.229,342.655l3.542,5.65,10.456-4.806-3.2-5.312Z" transform="translate(-2090.663 11.696)" fill="#707070"/>
                        </g>
                        <path d="M3038.945,345.272l-3.958-25.88,22.835,14.615-12.788,1.827Z" transform="translate(-2095 -2)" fill="#707070"/>
                      </g>
                    </svg>
                  </p>
                </Area>
              </Section>
              <Section>
                <Area>
                  <p className="h3 gsap" ref={el => {TweenMax.to(el, .5, {opacity: 1, y: -60, ease: Expo.easeOut, delay: .5 })}}>
                    <a href="https://j.mp/2XwtlH3" target="blank" alt="privateurl">Resposive Web App</a>
                    <svg className="drawing code" width="338" height="63" viewBox="0 0 338 63">
                      <text transform="translate(169 49)" fill="#707070" fontSize="51" fontFamily="JetBrainsMono-Regular, JetBrains Mono"><tspan x="-168.3" y="0"> {} [] () &lt;&gt; </tspan></text>
                  </svg>
                  </p>
                </Area>
              </Section>
            </div>
          </div>
          <div>
            <a onClick={goBack} className="close"><Close/></a>
          </div>
        </Inner>
        <div>
        </div>
      </Wrap>
    </>
  );
}