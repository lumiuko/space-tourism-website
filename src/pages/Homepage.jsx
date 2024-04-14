import { Link } from 'react-router-dom'
import useBackground from '../hooks/useBackground'

export default function Homepage() {
  useBackground('homepage')

  return (
    <main className="px-6 pt-6 pb-12 flex flex-col md:pt-[6.625rem] md:px-10 md:pb-[5.625rem] xl:py-[8.125rem] xl:flex-row">
      <div className="max-w-container mx-auto flex-1 flex flex-col justify-between items-center gap-20 md:gap-32 xl:flex-row xl:items-end">
        <div className="max-w-[450px] flex flex-col gap-4 text-center md:gap-6 xl:text-left animate-slide-up">
          <h1 className="flex flex-col gap-4 md:gap-6">
            <div className="text-nav leading-nav font-condensed uppercase tracking-nav md:text-xl md:leading-6 md:tracking-[3.38px] xl:text-h5 xl:leading-h5 xl:tracking-h5">
              So, you want to travel to
            </div>
            <div className="text-[5rem] leading-[6.25rem] uppercase font-serif text-white md:text-h1 md:leading-none xl:leading-h1">
              Space
            </div>
          </h1>
          <p className="max-w-[445px]">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link
          to="/destination"
          className="aspect-square w-[150px] bg-white text-dark-blue rounded-full flex justify-center items-center uppercase font-serif text-[1.25rem] tracking-[1.25px] md:w-[242px] md:text-h4 xl:w-[274px] xl:tracking-[2px] animate-scale-up hover:shadow-button  focus-visible:shadow-button transition-shadow"
        >
          Explore
        </Link>
      </div>
    </main>
  )
}
