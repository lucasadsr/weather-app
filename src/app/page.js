'use client'

import City from '@/components/City'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import Stats from '@/components/Stats'
import { Search } from 'lucide-react'
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

        {data ?
          <div>
            <City data={data} />
            <Stats data={data} />
          </div>
          : ''}

        {loading ?
          <Loading />
          : ''}

        {error ?
          <Error />
          : ''}

      </div>
    </main >
  )
}
