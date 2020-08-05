import React from 'react';
import styled from 'styled-components';

import Wrap from '../page/wrap';
import Menu from './menu';
import Title from './title';

const Paper = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 padding: 50px;
 background-color: #fff;
 width: 900px;
 margin-bottom: 100px;
 .portfolio, .contact, .education, .experience, .skill {display: flex; flex-direction: row; width: 100%; border-bottom: 1px solid #ddd; padding: 50px 0;}
 .contact .contactinner {flex-direction: row;}

 .contact h2 {width: 28%;}
 .education h2,
 .experience h2,
 .skill h2 {width: 40%;}

 ul {width: 100%; padding-left: 20px;}
 ul li:nth-of-type(1) {margin-top: 0;}
 li {font-size: 0.875rem; color: #898989; margin: 0.5rem 0rem; list-style: none; font-weight: 500; margin-top: 25px; display: flex; flex-direction: column;}
 p  {font-size: 0.875rem; font-weight: 300; color: #898989; margin: 0.5rem;}

 .my {width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; border-bottom: 1px solid #ddd; padding: 100px 0;}
 .my svg {margin-top: 250px;}
 img {background-color: #ddd; width: 150px; height: 150px; border-radius: 100px; margin-bottom: 50px;}
 .life {width: 80%; height: 150px; display: flex; align-items: center; justify-content: center; color: #898989; flex-direction: column;}

 a {color: #333; text-decoration: none;}
 a:hover {opacity: .5; transition: all 0.2s ease-out;}
 .inner {padding-right: 60px; width: calc(100% / 1); }
 border: 1px solid #ddd;

 .portfolio {border: none; padding-bottom: 0;}
 .portfolio .inner:nth-of-type(2) {border: none;}

@media all and (max-width:1020px) {
width: 90%;
padding: 70px 20px;
margin: 0;

li {margin-top: 5px;}
p {font-size: 0.875rem; padding-left: 1.1rem;}
h2 {font-size: 1rem;}

.box, .contactinner, .portfolio, .data {flex-direction: row;}
.life {width: 100%; text-align: center;}
.life p {padding-left: 0; font-size: 0.8rem;}
.portfolio, .data {margin: 0; padding: 0; border: none;}

.inner .title a {font-size: 0.875rem; font-weight: normal; padding-left: 1.1rem; color: #898989;}
.inner p a {color: #898989;}
.inner {padding-right: 0; padding: 30px 0;}
.inner {border-bottom: 1px solid #ddd;}

.m-none {display: none;}
.data {width: 100%;}
}

@media all and (max-width:650px) {
ul {width: 90%;}
.portfolio, .contact, .education, .experience, .skill {display: flex; flex-direction: column; padding-left: 10px;}
.contact .contactinner {flex-direction: column;}

.my {padding: 0 0 150px;}
.my svg {display: none;}
.contact h2, .education h2, .experience h2, .skill h2 {width: 100%;}
.box, .contact, .portfolio, .data {flex-direction: column;}
.left {width: 100%;}
.data .inner .title {font-size: 1.3rem;}
.m-border {border: none;}
}
`


export default function resume() {
    return (
        <>
    <Wrap>
        <Title>
            <Menu/>
        </Title>
        <Paper>
            <div className="my">
                <img src={require('../image/00.png')}/>
                <p>배움과 행복을 추구하는 삶을 살아가고 있습니다.</p>
                <p>실패를 통해서 실패율을 줄이는 방법을 좋아합니다.</p>
                <svg width="40" height="80" viewBox="0 0 42.52 92.934" id="box">
                        <g transform="translate(-959.646 -920.388)">
                            <path d="M980.834,949.844v91.436" transform="translate(0 -29.456)" fill="none" stroke="#707070" strokeWidth="1"/>
                            <path d="M949.844,990.131l20.906,20.906,20.906-20.906" transform="translate(10.156 1.578)" fill="none" stroke="#707070" strokeWidth="1"/>
                        </g>
                    </svg>
            </div>
            <div className="contact">
                <h2># Contact</h2>
                <div className="contactinner">
                    <ul>
                        <li>Name :</li>
                        <p>Lee Erin</p>
                        {/* <li className="m-none">- Phone</li>
                        <p>010 - 0000 - 0000</p> */}
                        <li>Email :</li>
                        <p>wfedev@gmail.com</p>
                    </ul>
                    <ul>
                        <li className="m-none">Address :</li>
                        <p className="m-none">
                            Nakseongdae, Gwanak-gu, Seoul, Republic of Korea
                        </p>
                        <li className="m-none">Interest :</li>
                        <p className="m-none">
                            Collection of design references
                        </p>
                        <li className="m-none">Language :</li>
                        <p className="m-none">
                            Korean, English, Javascript
                        </p>
                    </ul>
                </div>
            </div>
            <div className="education">
                <h2># Education</h2>
                <ul className="edu">   
                    <li>2013-2020 University (Dept. of Design) </li>
                    <li>2019 Web developer (Front-end, Back-end, Database)</li>
                    <li>2014 Architecture Construction practice (CAD, 3D visualization)</li>
                    <li>2012 Fashion Design (Pattern drawing, Cloth foundation, Sewing)</li>
                </ul>
            </div>
            <div className="experience">
                <h2># Work experience</h2>
                <ul className="work">
                    <li>* 2012-2020 Graphic design </li>
                    <li>* 2015-2020 UI/UX design, Publising, front end </li>
                    <li># 2020-2020 Education Archiving Web/App</li>
                    <li># 2020-2020 AI Solution Responsive Web</li>
                    <li># 2020-2020 P2P investment SPA </li>
                    <li># 2017-2019 E-commerce site Web/App </li>
                    <li># 2015-2016 Trading Company responsive Web </li>
                    <li>* 2017-2018 Exhibition Visualization </li>
                    <li>* 2014-2018 Architectural Visualization </li>
                    <li>* 2012-2013 Knit design </li>
                </ul>
            </div>
            <div className="skill">
                <h2># Skills </h2>
                <ul>
                    <li>* UI : Adobe XD, Figma, Sketch, Zplin</li>
                    <li>* Graphic : Adobe Illustrator, Adobe Photoshop</li>
                    <li>* Motion : Adobe After Effect</li>
                    <li>* 3D : Autodesk 3dsmax, Sketchup, Auto CAD, V-ray</li>
                    <li># Font-end : JS(ES6+), Jquery, ReactJS, CSS3, HTML5</li>
                    <li># Back-end : Java(Spring Boot), Nodejs(Express)</li>
                    <li># DataBase : OracleSQL, MySQL</li>
                    <li># Version : Github, Bitbuket</li>
                    <li># Cloud: AWS</li>
                </ul>
            </div>

            <div className="portfolio">
                <div className="inner">
                <h2># Graphic & UI Design</h2>
                  <ul>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">Behance</a>
                        <p className="m-none">디자인 작업 과정을 풀어서 업로드 하였습니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">Dribbble</a>
                        <p className="m-none">UI 그래픽 위주 개인작업으로 구성되어 있습니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3">Graphic Design Portfolio</a>
                        <p className="m-none">Private을 이유로 추가하지 못한 작업이 많습니다.<br/> 작업한 디자인 일부만 과정 없이 결과로 구성했습니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">MadicalMavericks</a>
                        <p className="m-none">Figma로 Userflow와 UI를 제작하였습니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">Loan UI</a>
                        <p className="m-none">Userflow기획을 바탕으로 UI를 제작하였습니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">Re-Branding</a>
                        <p className="m-none">기존 App ui를 ReBranding 하였습니다.</p>
                    </li>
                    <li><a>※ Link는 권한 요청하시면 오픈 가능합니다.</a></li>
                  </ul>
                <br/>
                </div>
                <div className="inner">
                <h2 className="title"># Web Design & Publising</h2>
                  <ul>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">ReactJS</a>
                        <p className="m-none">Adobe XD를 사용하여 디자인하고, ReactJS로 만든 Responsive WebApp 입니다.</p>
                    </li>
                    <li>
                        <a href="https://diary-blog.github.io/" target="blank">GatsbyJS</a>
                        <p className="m-none">ReactJS와 Typescript, scss, GatsbyJS 정보 수집용 개인저장소 블로그 입니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">Wordpress theme</a>
                        <p className="m-none">Photoshop, illustrator를 사용하여 디자인하고 Wordpress와 bootstrap으로 만든 company 웹사이트 입니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">Wordpress Custom CSS</a>
                        <p className="m-none">Figma로 받은 디자인을 참고하여 Wordpress를 custom css로 제작한 company 웹사이트 입니다.</p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">Cafe24</a>
                        <p className="m-none">Photoshop, illustrator를 사용하여 디자인하고 cafe24에 html, css을 작업한 Shoping Mall 입니다. </p>
                    </li>
                    <li>
                        <a href="https://j.mp/2XwtlH3" target="blank">html,css,JS</a>
                        <p className="m-none">XD로 받은 디자인을 참고하여 html, css, 바닐라 JS로 web, mobile 작업한 웹사이트 입니다. </p>
                    </li>
                  </ul>
                </div>
            </div>
        </Paper>
    </Wrap>
    </>
    );
}