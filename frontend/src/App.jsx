import React from 'react'

export const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-10 rounded-lg bg-gray-800 shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">React + Tailwind is Working!</h1>
        <p className="text-gray-300">Your frontend setup is ready 🚀</p>
        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
          Test Button
        </button>
      </div>
    </div>
  )
}  
export default App