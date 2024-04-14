import { CSSTransition, SwitchTransition } from 'react-transition-group'

import Heading from '../components/Heading'
import useBackground from '../hooks/useBackground'
import data from '../data.json'
import useTabs from '../hooks/useTabs'

export default function Crew() {
  useBackground('crew')
  const { selectedIndex, setSelectedIndex } = useTabs(data.crew.length)
  const selectedItem = data.crew[selectedIndex]

  return (
    <main className="px-6 pb-8 md:p-10 md:pb-0 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <Heading number="02" text="Meet your crew" />
        <div className="mt-8 flex-1 flex flex-col justify-center items-center gap-8 md:mt-[3.75rem] md:justify-between md:gap-10 xl:flex-row xl:mt-12 xl:items-end xl:gap-0">
          <SwitchTransition>
            <CSSTransition key={selectedIndex} classNames="image" unmountOnExit timeout={300} appear>
              <picture className="w-full border-b border-b-line md:order-1 md:border-none md:w-auto">
                <source srcSet={selectedItem.images.webp} type="image/webp" />
                <img
                  src={selectedItem.images.png}
                  className="w-full h-[222px] object-contain md:h-[532px] xl:h-auto xl:w-auto"
                  alt={selectedItem.name}
                />
              </picture>
            </CSSTransition>
          </SwitchTransition>
          <div className="flex flex-col items-center gap-8 md:gap-10 xl:items-start xl:gap-[7.5rem] xl:mb-24">
            <div className="flex items-center gap-4 md:order-1 xl:gap-6">
              {data.crew.map((crewMember, index) => (
                <button
                  key={index}
                  aria-pressed={selectedIndex === index}
                  aria-label={`Tab ${crewMember.name}`}
                  className="size-[10px] xl:size-[15px] rounded-full transition-colors bg-white/15 hover:bg-white/50"
                  style={{ backgroundColor: selectedIndex === index ? '#fff' : '' }}
                  onClick={() => setSelectedIndex(index)}
                ></button>
              ))}
            </div>
            <SwitchTransition>
              <CSSTransition key={selectedIndex} classNames="fade" unmountOnExit timeout={300} appear>
                <div className="text-center max-w-[600px] xl:text-left xl:max-w-full">
                  <p className="font-serif text-white/50 leading-[1.125rem] uppercase md:text-2xl md:leading-7 xl:text-h4 xl:leading-h4">
                    {selectedItem.role}
                  </p>
                  <h2 className="mt-2 font-serif text-white uppercase text-2xl leading-7 md:text-[2.5rem] md:leading-[2.875rem] xl:mt-4 xl:text-h3 xl:leading-h3">
                    {selectedItem.name}
                  </h2>
                  <p className="mt-4 min-h-[150px] md:min-h-min xl:max-w-[445px] xl:mt-7">{selectedItem.bio}</p>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </main>
  )
}
