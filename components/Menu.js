import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link'
import Japanese from '../public/images/Japanese.png';
import chinese from '../public/images/chinese.png';
import english from '../public/images/english.png';
import korean from '../public/images/korean.png';


const DropMenu = ({
  children, data, onClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div onClick={toggle} className='Menu'>
      {children}
      {isOpen && (
        <div className="Menu-content">
          <ul className='Menu-content-ul'>
            {data?.map(({ name, nodeRef }) => <li onClick={() => onClick(nodeRef)} className='Menu-content-ul-item' key={name}>{name}</li> )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropMenu;