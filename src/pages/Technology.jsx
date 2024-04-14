import { CSSTransition, SwitchTransition } from 'react-transition-group'

import Heading from '../components/Heading'
import useBackground from '../hooks/useBackground'
import useTabs from '../hooks/useTabs'

import data from '../data.json'

export default function Technology() {
  useBackground('technology')
  const { selectedIndex, setSelectedIndex } = useTabs(data.technology.length)
  const selectedItem = data.technology[selectedIndex]

  return (
    <main className="mb-20 flex flex-col md:mt-10 md:mb-24 xl:mt-[4.75rem] xl:ml-[10.25rem] xl:mb-[6.25rem] 2xl:max-w-7xl 2xl:mx-auto">
      <header className="md:px-10 xl:px-0">
        <Heading number="03" text="Space Launch 101" />
      </header>
      <div className="flex-1 mt-8 flex flex-col items-center md:mt-[3.75rem] xl:mt-[1.625rem] xl:flex-row">
        <div className="flex overflow-hidden xl:order-1 xl:max-w-[515px] xl:ml-auto">
          {data.technology.map((technology, index) => (
            <picture
              key={index}
              className="self-stretch w-full flex-shrink-0 transition-transform"
              style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
            >
              <source srcSet={technology.images.desktop} media="(min-width: 1280px)" />
              <source srcSet={technology.images.tablet} media="(min-width: 768px)" />
              <img src={technology.images.mobile} className="w-full" alt={technology.name} />
            </picture>
          ))}
        </div>
        <div className="mt-[2.125rem] flex items-center gap-4 text-nav leading-nav tracking-[1px] text-white font-serif md:mt-14 md:text-2xl md:leading-7 md:tracking-[1.5px] xl:flex-col xl:mt-0 xl:gap-8 xl:text-h4 xl:leading-h4 xl:tracking-[2px]">
          {data.technology.map((_, index) => {
            const classNames = index === selectedIndex ? 'bg-white text-dark-blue ring-white' : 'ring-white/25'
            return (
              <button
                key={index}
                className={`rounded-full size-10 ring-1 md:size-[3.75rem] xl:size-20 hover:ring-white ${classNames}`}
                style={{ transition: 'background-color 250ms, color 250ms, box-shadow 250ms' }}
                onClick={() => setSelectedIndex(index)}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
        <SwitchTransition>
          <CSSTransition key={selectedIndex} classNames="fade" timeout={300} unmountOnExit>
            <section className="mt-[1.625rem] text-center px-6 md:mt-11 xl:text-left xl:mt-0 xl:mx-20 xl:px-0 xl:max-w-[470px]">
              <p className="font-condensed text-sh2 leading-sh2 tracking-sh2 uppercase md:text-nav md:leading-nav md:tracking-nav">
                The terminology…
              </p>
              <h2 className="mt-2 text-white font-serif text-2xl leading-7 uppercase md:mt-4 md:text-[2.5rem] md:leading-[2.875rem] xl:mt-3 xl:text-h3 xl:leading-h3">
                {selectedItem.name}
              </h2>
              <p className="mt-4 max-w-[458px] xl:max-w-none">{selectedItem.description}</p>
            </section>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </main>
  )
}
