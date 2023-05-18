'use client'

import { Search, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [city, setCity] = useState('')

  return (
    <main className="min-h-screen relative">
      <div className="h-[520px] w-[320px] bg-white absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-lg opacity-50 py-8 px-5">
        <h1 className="text-center text-2xl font-bold">Weather App</h1>
        <form className='flex w-full justify-between items-center py-5' onSubmit={handleSubmit}>
          <input className='w-5/6 py-1 outline-none border-b-2 border-black ' type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
          <button type="submit" className='w-1/6'>
            <Search className='w-full hover:cursor-pointer' />
          </button>
        </form>

        <div>
          <div className='flex justify-center items-center gap-2 py-2'>
            <MapPin />
            <p className='text-2xl font-bold'>city name</p>
            <span>flag</span>
          </div>

          <div className='grid grid-cols-2'>
            <div>
              <span>Temperature</span>
              <span>Weather</span>
              <span>Weather icon</span>
            </div>
            <div>
              <span>Humidity</span>
              <span>Wind speed</span>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
