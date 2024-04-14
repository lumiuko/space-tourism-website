import { NavLink, Outlet } from 'react-router-dom'

import useBackground from '../hooks/useBackground'
import data from '../data.json'
import Heading from '../components/Heading'

export default function DestinationLayout() {
  useBackground('destination')

  const navLinks = data.destinations.map((destination, index) => (
    <li key={index}>
      <NavLink
        className="lg-nav-link flex text-sh2 leading-sh2 tracking-sh2 pb-3 md:pb-4 md:text-nav md:leading-nav md:tracking-nav"
        to={destination.name.toLowerCase()}
      >
        {destination.name}
      </NavLink>
    </li>
  ))

  return (
    <main className="px-6 pb-14 md:p-10 md:pb-[3.875rem] xl:pt-[4.75rem] xl:pb-28">
      <div className="max-w-container mx-auto">
        <Heading number="01" text="Pick your destination" />
        <div className="mt-8 grid justify-items-center md:mt-[3.75rem] xl:mt-16 xl:ml-16 xl:grid-cols-destination xl:justify-items-start xl:justify-between">
          <ul className="mt-[1.625rem] flex items-center gap-6 font-condensed uppercase md:mt-[3.25rem] md:gap-9 xl:mt-0 xl:col-start-2">
            {navLinks}
          </ul>
          <Outlet />
        </div>
      </div>
    </main>
  )
}
