import React from 'react'
import Navbar from '../components/Navbar'
import RecipeCardfav from '../components/RecipeCardfav'
import { useSelector, useDispatch } from 'react-redux'
import { clearfav } from '../redux/features/favSlice' 

function Favourites() {
  const { fav } = useSelector((state) => state.allfav)
  const dispatch = useDispatch()
console.log(fav)
  const handleEmptyFavorites = () => {
    dispatch(clearfav())
  }

  return (
    <div className='w-full bg-black'>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-4/5 h-3/5 border border-gray-800 rounded-lg'>
          {/* Header */}
          <div className='flex items-center h-20 px-8 justify-between border-b border-gray-700 rounded-t-lg'>
            <h1 className='text-white sm:text-2xl text-lg'>Favorites</h1>
            {fav.length > 0 && (
              <button
                onClick={handleEmptyFavorites}
                className='bg-white text-black sm:text-xl text-lg sm:py-3 py-1.5 sm:px-6 px-3 rounded-lg hover:bg-gray-300'
              >
                Empty
              </button>
            )}
          </div>

          {/* Body */}
          <div className='p-6'>
            {fav.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fav.map((item, index) => (
                  <RecipeCardfav recipe={item} key={index} />
                ))}
              </div>
            ) : (
              <div className='flex flex-col justify-center items-center h-[300px]'>
                <span className='sm:text-4xl text-xl text-white'>
                  Your favorites section is empty.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourites
