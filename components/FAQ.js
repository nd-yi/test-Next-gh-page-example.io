import React, { forwardRef } from 'react';
import Image from 'next/image';
import faqOneV1 from '../public/images/faq-one-v1.png';
import faqOneV2 from '../public/images/faq-one-v2.png';
import faqTwoV1 from '../public/images/faq-two-v1.png';
import faqTwoV2 from '../public/images/faq-two-v2.png';

import tu2 from '../public/images/tu2.png';

const FAQ = forwardRef((porps, ref) => {
  return (
    <section className='eighth-section'>
        <h1 ref={ref}>FAQ</h1>
        <div className='content'>
          <div className='content-item'>
            <span className='content-item-index'>01</span>
            <h3>What is OVO?</h3>
            <div className='desc'>
              <p>OVO (ovo.space) is the industry&apos;s first platform to issue holographic AR-NFT assets and is currently deployed on the
                BSC and FLOW. The NFT issued by OVO will be delivered as Super Avatars to various Metaverses and GameFi platforms.
                OVO will be an important content provider for the future Metaverse. </p>
              <p className='group'>The DCIM standard pioneered by OVO ensures the legitimacy of NFT asset issuance and transactions, and binds the value
              of NFT and derivatives to genuine IPs, thereby realising the transfer of traditional copyright to the blockchain assets.</p>
            </div>
          </div>
          <div className='content-item'>
            <span className='content-item-index'>02</span>
            <h3>How to solve it when the gas fee is too high?</h3>
            <div className='desc'>
              <p>For iOS/Android users:</p>

              <div className='group'>
                <p>You can access OVO through MetaMask App.</p>
                <p>Network needs to be connected to BSC and please use the browser on MetaMask.</p>
              </div>

              <div className='group'>
                <p>BSC Network Settings</p>
                <p>---------------</p>
                <p>Network Name: Binance Smart Chain</p>
                <p>New RPC URL: https://bsc-dataseed.binance.org/</p>
                <p>ChainID: 56</p>
                <p>Currency Symbol: BNB</p>
                <p>Block Explorer URL: https://bscscan.com (https://bscscan.com/)</p>
                <p>Details:</p>
                <p><a href='https://bit.ly/3uw4ZhV'>https://bit.ly/3uw4ZhV</a></p>
              </div>
            </div>
          </div>

          <div className='content-item'>
            <span className='content-item-index'>03</span>
            <h3>How to solve it when the gas fee is too high?</h3>
            <div className='desc'>
              <p>If the gas fee is too high, please do not confirm the transaction. It might be the following reasons:</p>
              <p>1.Insufficient $BUSD</p>
              <p>Users need to confirm whether the BUSD balance is sufficient before purchasing, otherwise the gas fee will be abnormally high when purchasing.</p>
              <div className='group'>
                <p>2.Using your own referral links</p>
                <p>The user may accidentally open his own referral link when making a purchase. At this time, the gas fee will be too high by 
                mistake. Please use the correct referral link (not his own link)to reopen the page and buy.</p>
              </div>

              <div className='group'>
                <p>3.The mystery box is sold out</p>
                <p>After selling out, the gas fee will also be too high.</p>
              </div>
              <div className='group'>
                <p>4.Other technical faults occur</p>
                <p>If you have tried the above three solutions, but the gas fee is still too high. You may indeed meet technical faults,
                please ask OVO customer service.</p>
              </div>
            </div>
          </div>

          <div className='content-item'>
            <span className='content-item-index'>04</span>
            <h3>How to get Affiliates Link?</h3>
            <div className='desc'>
              <p>
                1.Connect BSC wallet to
                <a href="https://ovobsc.ovo.space/#/collection/nyathees" rel="noreferrer" target="_blank">https://ovobsc.ovo.space/#/collection/nyathees</a>
                . Ensure you have enough BNB and BUSD in your wallet.
              </p>
              <p>*More details about how to connect wallet to BSC network:</p>
              <p><a href="https://ovobsc.ovo.space/#/collection/nyathees" rel="noreferrer" target="_blank">https://ovobsc.ovo.space/#/collection/nyathees</a></p>
              <div className='group'>
                <p>
                 <span>2. You could click here as shown below to get your referral link. Spread it everywhere such as Twitter, Instagram, facebook 
                 and other social media.</span>
                 <picture>
                   <source srcSet={faqOneV2} media="(min-width: 800px)"></source>
                   <Image src={faqOneV1} layout='intrinsic' alt="tu1" />
                 </picture>
                </p>
              </div>
              <div className='group'>
                <p>
                  <span>3. If someone buys a Mystery Box through your referral link, the 20% commission of sales automatically shows on the OVO account as below.
                  Remember to often check how much you earn & claim to your wallet. The affiliates relationship with your customers will be permanent.</span>
                  <picture>
                    <source srcSet={faqTwoV2} media="(min-width: 800px)"></source>
                    <Image src={faqTwoV1} layout='intrinsic' alt="tu2" />
                  </picture>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
})

FAQ.displayName="FAQ"

export default FAQ;
