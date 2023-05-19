'use client'

import { Search, MapPin, Droplet, Wind } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3aff5c202bd9a83c23f5bca203d827e1`)
    const data = await response.json()

    if (data.cod === 200) {
      setData(data)
    }
  }

  return (
    <main className="min-h-screen relative">
      <div className="h-fit min-w-[420px] bg-white/50 absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-lg py-8 px-7 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Weather App</h1>
        <form className='flex w-full justify-between items-center mt-5' onSubmit={handleSubmit}>
          <input className='w-11/12 py-1 outline-none border-b-2 border-black bg-transparent placeholder-zinc-600' type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
          <button type="submit" className='w-1/12'>
            <Search className='w-full hover:cursor-pointer' />
          </button>
        </form>

        {data ? <div className=''>
          <div className='flex justify-between items-center gap-2 my-8'>
            <MapPin className='w-1/12' />
            <p className='text-2xl font-bold w-8/12' >{data.name}</p>
            <img className='h-12' src={`https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`} alt="Country flag" />
          </div>

          <div className='flex justify-between'>
            <div>
              <span className='text-lg'>{Math.round(data.main.temp)}℃</span>
              <div className='flex items-center gap-2'>
                <span className='capitalize text-lg'>{data.weather[0].description}</span>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
              </div>
            </div>
            <div>
              <div className='flex items-center capitalize text-lg'><Droplet /><span className='px-1'>{data.main.humidity}%</span></div>
              <div className='flex items-center capitalize text-lg mt-2'><Wind /><span className='px-1'>{data.wind.speed}km/h</span></div>
            </div>
          </div>
        </div> : ''}
      </div>
    </main >
  )
}
