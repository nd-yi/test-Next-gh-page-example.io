import React, { useState } from 'react';
import Image from 'next/image'
import { Link } from 'react-router-dom';
import Japanese from '../assets/images/Japanese.png';
import chinese from '../assets/images/chinese.png';
import english from '../assets/images/english.png';
import korean from '../assets/images/korean.png';


const DropMenu = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div onClick={toggle} className='DropMenu'>
      {children}
      {isOpen && (
        <div className="DropMenu-content">
          <div className="DropMenu-content-box">
            <Image src={Japanese} width="28" height="22" alt="img_language_e" />
            <Image width="28" height="22" src={chinese} alt="jp_logo" />
            <Image width="28" height="22" src={korean} alt="jp_logo" />
          </div>
        </div>
      )}
    </div>
  )
}

export default DropMenu;