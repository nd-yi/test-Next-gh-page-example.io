import React, { useState } from 'react';
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
            <img src={Japanese} width="28px" height="22px" alt="img_language_e" />
            <img width="28px" height="22px" src={chinese} alt="jp_logo" />
            <img width="28px" height="22px" src={korean} alt="jp_logo" />
          </div>
        </div>
      )}
    </div>
  )
}

export default DropMenu;