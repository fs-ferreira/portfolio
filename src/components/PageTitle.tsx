interface PageTitleProps {
  value: string
}

export default function PageTitle({ value }: PageTitleProps) {
  return (
    <h1 className='font-extrabold text-3xl text-violet-950'>{value}</h1>
  )
}