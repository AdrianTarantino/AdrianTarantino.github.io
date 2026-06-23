import React from 'react'

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className='btn btn-ghost text-xl' href='mailto:adriantarantino2006@gmail.com'>Email Me</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li><a href='mailto:adriantarantino2006@gmail.com'>Email Me</a></li> */}
          <li><a href='https://adrianthehacker.notion.site/Adrian-s-Blog-2326e2b064d4804097b1eea96204696c'>Blog</a></li>
          <li><a href="#portfolio">Portfolio</a></li> 
          <li>
            <a href='https://www.linkedin.com/in/adriantarantino/'>LinkedIn</a>
            {/* <details>
              <summary>Socials</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a href='https://www.linkedin.com/in/adriantarantino/'>LinkedIn</a></li>
                <li><a href='https://github.com/AdrianTheHacker'>GitHub</a></li>
                <li><a href='https://www.youtube.com/@AdrianTheHacker'>YouTube</a></li>
              </ul>
            </details> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
