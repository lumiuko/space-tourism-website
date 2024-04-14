export default function Heading({ number, text }) {
  return (
    <h1 className="text-center text-white font-condensed text-nav leading-nav tracking-nav uppercase md:text-left md:text-xl md:leading-6 xl:text-h5 xl:leading-h5 xl:tracking-h5">
      <span className="text-white/25 font-bold">{number}</span>
      <span className="ml-4 md:ml-5">{text}</span>
    </h1>
  )
}
