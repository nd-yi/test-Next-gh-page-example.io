import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react';
import { BrowserView, MobileView, getSelectorsByUserAgent } from 'react-device-detect'
import classNames from 'classnames';
// import DropMenu from './components/DropMenu';
import Menu from '../components/Menu';
import FAQ from '../components/FAQ';

import logo from '../public/images/img_logo.png';
import telegram from '../public/images/telegram.png';
import twitter from '../public/images/twitter.png';
import discord from '../public/images/discord.png';
import ipLeft from '../public/images/ip-left.png';
import ipRight from '../public/images/ip-right.png';
import dcimbanner from '../public/images/dcimbanner.png';
import line from '../public/images/line.png';
import medium from '../public/images/medium.png';
import bofang from '../public/images/bofang.png';


import di1 from '../public/images/di1.png';
import bsc from '../public/images/bsc.png';
import flow from '../public/images/flow.png';


import english from '../public/images/english.png';


import logo1 from '../public/images/logo1.png';
import logo2 from '../public/images/logo2.png';
import logo3 from '../public/images/logo3.png';
import logo4 from '../public/images/logo4.png';
import logo5 from '../public/images/logo5.png';
import logo6 from '../public/images/logo6.png';
import logo7 from '../public/images/logo7.png';
import logo8 from '../public/images/logo8.png';
import logo9 from '../public/images/logo9.png';
import logo10 from '../public/images/logo10.png';
import logo11 from '../public/images/logo11.png';
import logo12 from '../public/images/logo12.png';
import logo13 from '../public/images/logo13.png';

import banner1 from '../public/images/banner/banner1.png';
import banner2 from '../public/images/banner/banner2.png';
import banner3 from '../public/images/banner/banner3.png';
import banner4 from '../public/images/banner/banner4.png';

import dcim from '../public/images/dcim.png';
import ip from '../public/images/ip.png';
import metaverse from '../public/images/metaverse.png';

// import './App.scss';

const discordUrl = 'https://discord.gg/AYVkjX5s3d'
const twitterUrl = 'https://twitter.com/ovo__official'
const telegramUrl = 'https://t.me/OVO_Official'
const lineUrl = 'https://bit.ly/2XjJ9jB'
const mediumUrl = 'https://medium.com/@ovonft'

const youtubeUrl = 'https://www.youtube.com/watch?v=awf_tQuHkWQ'
const ovoBscUrl = 'https://ovobsc.ovo.space/';
const ovoFlowUrl = 'https://www.ovo.space/'

const sliderImages = [banner1, banner2, banner3, banner4]
const footerImageList = [
  { imageUrl: discord, link: discordUrl },
  { imageUrl: telegram, link: telegramUrl },
  { imageUrl: twitter, link: twitterUrl },
  { imageUrl: line, link: lineUrl },
  { imageUrl: medium, link: mediumUrl },
]

const btnList = [
  { content: 'ENTER WEBSITE ON BSC', link: ovoBscUrl, iconUrl: bsc },
  { content: 'ENTER WEBSITE ON FLOW', link: ovoFlowUrl, iconUrl: flow }
]

const PartnersImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13]

// 2021.6.30 Launch of OVO website on BSC
// 2021.9.1 Nyathees Mystery Box
// 2021.10.27 Launch another OVO website on Flow
// 2021.10.28  NFT main drop on Flow 
// 2022.3 NFT fusion
// 2022.4 OVO AR NFT 
// 2022.6 exhibition in Metaartia
// 2022.7 NFT Defi and NFT mining
// 2022.10 Bring OVO NFT to metaverse

const activityProgressList = [
  { date: '2021/6', active: false, position: 'right', info: 'Launch of OVO website on BSC'},
  { date: '2021/9', active: false, position: 'left', info: 'Nyathees Mystery Box'},
  { date: '2021/10', active: false, position: 'right', info: 'Launch another OVO website on Flow'},
  { date: '2021/10', active: false, position: 'left', info: 'NFT main drop on Flow'},
  { date: '2022/3', active: true, position: 'right', info: 'NFT fusion'},
  { date: '2022/4', active: false, position: 'left', info: 'OVO AR NFT'},
  { date: '2022/6', active: false, position: 'right', info: 'Exhibition in Metaartia'},
  { date: '2022/7', active: false, position: 'left', info: 'NFT Defi and NFT mining'},
  { date: '2022/10', active: false, position: 'right', info: 'Bring OVO NFT to metaverse'},
]

const OVOSPACEMetaverseList = [
  {
    title: 'DCIM',
    image: dcim,
    content: 'This is composed of the lower-level copyright verification and the upper-level asset management mechanism. The lower-level is the copyright-related cooperation and authorization agreement represented by NFT, and the upper-level is the issuance and management circulation mechanism of those NFT assets. NFT is based on ERC721 and ERC1155.'
  },
  {
    title: 'IP',
    image: ip,
    content: 'The OVO platform has a wealth of Japanese IP resources. At present, OVO has issued two NFT products with exclusive contracts. Gravure idols NFT were sold out very quickly on FlowFest, and the sales ranked 5th in the entire Flowverse. Nyathees (one of the most famous Anime characters, with more than 4 million paid download in Japan). OVO has sold more than 34,000 Nyathees Mystery Boxes.'
  },
  {
    title: 'Metaverse',
    image: metaverse,
    content: 'Building a true metaverse requires a complete virtual world, time continuity, value transmission, and orderly operation. OVO will be a content distribution platform based on NFT technology to provide "value transfer" solutions for various metaverses, and it will also be a "creator metaverse".'
  }
]

function Home(props) {
  const eleRef = useRef(null)
  
  const homeRef = useRef(null)
  const metaverseRef = useRef(null)
  const dcimRef = useRef(null)
  const arNftRef = useRef(null)
  const roadMapRef = useRef(null)
  const partnersRef = useRef(null)
  const faqRef = useRef(null)

  const navList = [
    { name: 'HOME', nodeRef: homeRef },
    { name: 'METAVERSE', nodeRef: metaverseRef },
    { name: 'DCIM', nodeRef: dcimRef },
    { name: 'AR NFT', nodeRef: arNftRef },
    { name: 'ROADMAP', nodeRef: roadMapRef },
    { name: 'PARTNERS', nodeRef: partnersRef },
    { name: 'FAQ', nodeRef: faqRef },
  ]

  const { uaString } = props || {}
  const { isMobile, isBrowser } = getSelectorsByUserAgent(uaString)


  const handleClickFAQ = (nodeRef) => {
    if (nodeRef.current) {
      nodeRef.current?.scrollIntoView({behavior: "smooth"});
    }
  }

  useEffect(() => {
    import('tiny-slider').then(({ tns }) => {
      tns({
        container: eleRef.current,
        items: 3,
        // slideBy: 'page',
        speed: 400,
        mouseDrag: true,
        autoplay: false,
        preventScrollOnTouch: 'auto',
        controls: false,
        navPosition: 'bottom',
        gutter:  isMobile ? 0 : 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayButton: false,
        // fixedWidth: 150,
        // autoHeight: true,
        // autoWidth: true,
      });
    })
}, [])

  return (
    <div className="App">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"></link>
      </Head>
      <section className={classNames('first-section', {'first-section-mobile': isMobile, 'first-section-pc' : isBrowser})}>
        <nav className='nav'>
          <a className='logo' href={ovoBscUrl} target="_blank" rel='noreferrer'>
            <Image src={logo} width={isMobile ? '60' : '90'} alt="logo" />
          </a>
          <div className='nav-right'>
            <BrowserView>
              <ul className='nav-right-ul'>
                {navList.map(({ name, nodeRef }) => <li onClick={() => handleClickFAQ(nodeRef)} className='nav-right-ul-item' key={name}>{name}</li> )}
              </ul>
            </BrowserView>
            <MobileView>
              <Menu onClick={handleClickFAQ} data={navList}>
                <span className='menu-mobile'>...</span>
              </Menu>
            </MobileView>
            
            {/* <DropMenu>
              <div><Image src={english} width="28" height="22" alt="english" /></div>
            </DropMenu> */}
          </div>
        </nav>
        <div className={classNames('first-section-content', {'first-section-content-mobile': isMobile, 'first-section-content-pc' : isBrowser})}>
          <h1 ref={homeRef} className={isMobile ? 'title-mobile' : 'title-pc'}>
            <span className='title-text'>OVO.SPACE METAVERSE</span>
          </h1>
          <div className={classNames('desc', {'desc-mobile': isMobile, 'desc-pc' : isBrowser})}>
            <p>
              ovo (ovo.space) is the industry's frst platform to issue holographic AR-NFT
              assets and is currently deployed on the BSC and FLOW. The NFT issued by ovo
              will be delivered as Super Avatars to various Metaverses and GameFi platforms.
              OVO will be an important content provider for the future Metaverse.
            </p>
          </div>
          
          <div className={classNames('btn-box', {'btn-box-mobile': isMobile})}>
            {
              btnList.map(({ content, link, iconUrl }) => (
                <Link href={link}>
                  <button key={content} className={classNames('button', {'button-mobile': isMobile})}>
                    <Image src={iconUrl} width="18" height="18" alt="bsc" />
                    <span>{content}</span>
                  </button>
                </Link>
              ))
            }
          </div>
          <div className={classNames('icon-box', {'icon-box-mobile': isMobile})}>
            <a href={telegramUrl} target="_blank"rel="noreferrer">
              <Image src={telegram} width="32" alt="telegram" />
            </a>
            <a href={twitterUrl} target="_blank"rel="noreferrer">
              <Image src={twitter} width="32" alt="twitter" />
            </a>
            <a href={discordUrl} target="_blank"rel="noreferrer">
              <Image src={discord} width="32" alt="discord" />
            </a>
            
          </div>
        </div>
      </section>

      <section className='third-section'>
        <div>
          <Image src={ipLeft} width="24" alt="ip icon" />
          <span className='IP'>IP </span>
          <span className='title'>resources</span>
          <Image src={ipRight} width="24" alt="ip icon" />
        </div>
        <div ref={eleRef} className='slider-box'>
          { sliderImages.map(image => (
            <div key={image}>
              <Image src={image} layout="intrinsic" height={isMobile ? "120" : '220'} alt="sliderImages" />
            </div>
          ))}
        </div>
      </section>

      <section className='forth-section'>
        <h1 ref={metaverseRef}>OVO SPACE Metaverse</h1>
        <div className='content'>
          {
            OVOSPACEMetaverseList.map(({ title, image, content }) => (
              <div className={classNames('item', {'item-mobile': isMobile, 'item-pc' : isBrowser})} key={title}>
                <Image src={image} width="28"  alt="dcim" />
                <h2 className='title'>{title}</h2>
                <p className='desc'>{content}</p>
              </div>
            ))
          }
        </div>
      </section>
      
      {/* fifth-section */}
      <section className='fifth-section'>
        <div className='fifth-section-header'>
          <h1 ref={dcimRef}>DCIM</h1>
          <p className='desc'>The dual copyright inspection mechanism (DCIM: Dual Copyright Inspection Mechanism) consists of copyright 
          verification and asset management mechanisms. The underlying logic is the copyright-related cooperation and authorization 
          agreement that binds NFT assets, and the superstructure is the issuance and management circulation mechanism of NFT assets. 
          The DCIM mechanism guarantees the unity of creators and NFT works, as well as the regularity of NFT issuance and the legality 
          of transactions.. 
          </p>
          <Image src={dcimbanner} layout="intrinsic" alt="dcimbanner" />
        </div>
        <div className={classNames('fifth-section-content', {'fifth-section-content-mobile': isMobile, 'fifth-section-content-pc' : isBrowser})}>
          <h2 ref={arNftRef}>AR NFT</h2>
          <div className='desc-box'>
            <div className='fifth-section-content-img' >
              <Image src={di1} layout="intrinsic" alt="di1" />
              <a href={youtubeUrl} target="_blank" className='play-icon' rel="noreferrer">
                <Image src={bofang} width="42" height="42" alt="bofang" />
              </a>
            </div>
            <div>
              <p>The OVO platform integrates holographic</p>
              <p>AR technology to increase the value of</p>
              <p>NFT assets in audio-visual</p>
              <p>entertainment. In the future, GameFi</p>
              <p>applications based on AR technology will</p>
              <p> be built to expand the scenarios of OVO tokens.</p>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* sixth-section */}
      <section className='sixth-section'>
        <h1 ref={roadMapRef} className={classNames('title', {'title-mobile': isMobile, 'title-pc' : isBrowser})}>ROADMAP</h1>
        <div className='activity-content'>
          {
            activityProgressList.map(({date, active, position, info}, index) => {
              const isLastItem = index + 1 === activityProgressList.length;

              return (
                <div className="activity" key={date + info}>
                  <span className= {active ? 'circle': 'hollow-circle'}></span>
                  <span className="time">
                    {date}
                    <div className={classNames(`bubble bubble-${position}`, {[`bubble-${position}-mobile`]: isMobile, [`bubble-${position}-pc`] : isBrowser, [`bubble-${position}-active`]: active})}>
                      <div className={classNames('bubble-text', {'bubble-text-mobile': isMobile, 'bubble-text-pc' : isBrowser})}>{info}</div>
                    </div>
                  </span>
                  { isLastItem ? null : <span className="arrow">----</span> }
                </div>
              )
            })
          }
        </div>
      </section>

      <section className='seventh-section'>
        <h1 ref={partnersRef} className={classNames('title', {'title-mobile': isMobile, 'title-pc' : isBrowser})}>PARTNERS</h1>
        <div className={classNames('seventh-section-content', {'seventh-section-content-mobile': isMobile, 'seventh-section-content-pc' : isBrowser})}>
          {
            PartnersImages.map(image =>  <div key={image}><Image src={image} layout="intrinsic" alt="logo1" /></div>)
          }
         
        </div>
      </section>

      <FAQ ref={faqRef} />

      

      <footer className='footer'>
        <div className='footer-content'>
          { footerImageList.map(({ imageUrl, link}) => (
            <a key={link} href={link} target="_blank" rel="noreferrer">
              <Image key={imageUrl} src={imageUrl} width="32" height="32" alt="images" />
            </a>
          ))}
        </div>
        <p>Copyright© 2021 OVO.SPACE. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Home;

export function getServerSideProps(context) {
  return {
    props: {
      uaString: context.req.headers['user-agent']
    }
  }
}

// export default function Home() {
//   return (
//     <div>
//       Hello World.{' '}
//       <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
//         <a>About</a>
//       </Link>
//     </div>
//   )
// }
