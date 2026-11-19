import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://6a8d6c3fbaf2ac84246d0e55.mockapi.io/api/i/laptops-api')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setError('Failed to load laptops.')
      })
  }, [])

return (
  <main className="min-h-screen bg-[#140d0b] px-4 py-10 sm:px-6">
    {data ? (
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(item => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-[#3b2118] to-[#2b1116] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-orange-600/20"
          >
            {/* Изображение */}
            <div className="flex h-52 items-center justify-center bg-white p-4">
              <img
                src={item.avatar}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Характеристики */}
            <div className="flex flex-1 flex-col p-5">
              <h2 className="mb-4 text-2xl font-bold text-white">
                {item.name}
              </h2>

              <div className="space-y-2 text-sm text-orange-100/80">
                <p>{item.inch}" Display</p>
                <p>GPU: {item.gpu} Core</p>
                <p>{item.memory}</p>
                <p>SSD: {item.ssd}</p>
                <p>Battery: {item.cycle}%</p>
              </div>

              {/* Цена */}
              <p className="mb-4 mt-5 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-3xl font-extrabold text-transparent">
                ${Number(item.price).toLocaleString('en-US')}
              </p>

              {/* Кнопка */}
              <button
                type="button"
                className="mt-auto w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-red-600/20 transition duration-200 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400 active:scale-[0.98]"
              >
                Buy Now
              </button>
            </div>
          </article>
        ))}
      </div>
    ) : (
      <p role="status" className="py-20 text-center text-lg text-orange-300">
        Загрузка ноутбуков...
      </p>
    )}
  </main>
)
}

export default App