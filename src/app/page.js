'use client'

import { Search, MapPin, Droplet, Wind } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const token = process.env.NEXT_PUBLIC_API_TOKEN

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (city.trim() !== '') {

      setLoading(true)
      setCity('')
      setData(null)
      setError(false)

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${token}`)
      const data = await response.json()
      setLoading(false)

      if (data.cod === 200) {
        setData(data)
      } else {
        setError(true)
      }
    } else {
      alert('Enter a valid city.')
    }

  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="h-fit min-w-[360px] bg-white/50 rounded-lg py-8 px-7 mx-2 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Weather App</h1>
        <form className='flex w-full justify-between items-center mt-5' onSubmit={handleSubmit}>
          <input className='w-11/12 py-1 outline-none border-b-2 border-black bg-transparent placeholder-zinc-600' type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
          <button type="submit" className='w-1/12'>
            <Search className='w-full hover:cursor-pointer' />
          </button>
        </form>

        {data ? <div className=''>
          <div className='flex justify-center items-center gap-2 my-8'>
            <MapPin />
            <p className='text-2xl font-bold' >{data.name}</p>
            <img className='h-12' src={`https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`} alt="Country flag" />
          </div>

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
              <div className='flex items-center capitalize text-lg mt-2'><Wind /><span className='px-1'>{data.wind.speed}km/h</span></div>
            </div>
          </div>
        </div> : ''}

        {loading ?
          <p className='my-4 text-lg font-bold'>Loading...</p>
          : ''}

        {error ?
          <div>
            <p className='my-4 text-lg font-bold'>City not found! Try again.</p>
          </div>
          : ''}

      </div>
    </main >
  )
}
