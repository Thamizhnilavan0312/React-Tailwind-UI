import React from 'react'

const Header = () => {
  return (
<header
className='h-96 bg-cover bg-center flex items-center justify-center'
  style={{
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkpyiQqQTSK9-b4L0NHZZpB_NqFvNnrMvoA&s')",
  }}
  >
  <h1 className='text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4 text-white'>🚀Welcome to My Website</h1>
</header>
  )
}

export default Header