import { useState } from 'react'
import HorizontalNavBar from './horizontalNavBar';
import SideNavBar from './sideNavBar';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='max-w-screen z-10 fixed top-0 left-0 '>
      <HorizontalNavBar isMenuOpen={isMenuOpen} toggleSideNav={() => setIsMenuOpen(!isMenuOpen)} />
      <SideNavBar isMenuOpen={isMenuOpen} closeToggleSideNav={() => setIsMenuOpen(false)} />

    </div>
  )
}

export default Header
