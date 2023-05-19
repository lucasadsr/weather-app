import { Droplet, Wind } from 'lucide-react'

export default function Stats({ data }) {
  return (
    <div className='flex justify-between'>
      <div>
        <span className='text-lg'>{Math.round(data.main.temp)}℃</span>
        <div className='flex items-center gap-2'>
          <span className='capitalize text-lg'>{data.weather[0].description}</span>
          <img className='w-11' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
        </div>
      </div>
      <div>
        <div className='flex items-center capitalize text-lg'><Droplet /><span className='px-1'>{data.main.humidity}%</span></div>
        <div className='flex items-center capitalize text-lg mt-2'><Wind /><span className='px-1'>{data.wind.speed}m/s</span></div>
      </div>
    </div>
  )
}