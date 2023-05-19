import { MapPin } from 'lucide-react'

export default function City({ data }) {
  return (
    <div className='flex justify-center items-center gap-2 my-8'>
      <MapPin />
      <p className='text-2xl font-bold' >{data.name}</p>
      <img className='h-12' src={`https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`} alt="Country flag" />
    </div>
  )
}