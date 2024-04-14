export default function FactsCard({ name, value }) {
  return (
    <section className="flex flex-col gap-3 md:flex-1 md:max-w-[220px] xl:flex-auto xl:max-w-max">
      <h3 className="font-condensed text-sh2 leading-sh2 tracking-sh2">{name}</h3>
      <p className="text-white font-serif text-sh1 leading-sh1">{value}</p>
    </section>
  )
}
