import { useParams, Navigate } from 'react-router-dom'
import data from '../data.json'
import FactsCard from '../components/FactsCard'

export default function DestinationDetail() {
  const { name } = useParams()
  const currentItem = data.destinations.find(destination => destination.name.toLowerCase() === name.toLowerCase())

  if (!currentItem) {
    return <Navigate to=".." />
  }

  return (
    <>
      <picture className="-order-1 xl:row-start-2">
        <source srcSet={currentItem.images.webp} type="image/webp" />
        <img src={currentItem.images.png} className="w-[170px] md:w-[300px] xl:w-full" alt={currentItem.name} />
      </picture>
      <article className="mt-5 max-w-[573px] divide-y divide-line text-center md:mt-8 xl:text-left xl:mt-9">
        <header className="pb-8 md:pb-12 xl:pb-[3.375rem]">
          <h2 className="font-serif text-h3 leading-h3 text-white uppercase md:text-[5rem] md:leading-[5.75rem] xl:text-h2 xl:leading-h2">
            {currentItem.name}
          </h2>
          <p className="min-h-[125px] md:min-h-0 md:mt-2 xl:mt-[0.875rem]">{currentItem.description}</p>
        </header>
        <div className="pt-8 flex flex-col gap-8 uppercase md:pt-7 md:flex-row md:justify-center md:gap-3 xl:justify-start xl:gap-20">
          <FactsCard name="Avg. distance" value={currentItem.distance} />
          <FactsCard name="Est. travel time" value={currentItem.travel} />
        </div>
      </article>
    </>
  )
}
