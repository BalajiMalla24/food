import React, { useEffect, useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils'
function Recipe() {
    const [recipes , setRecipes] = useState([])
    const [query , setQuery ] = useState('vegan')
    const [limit , setlimit] = useState(30)
    const [loading, setloading] = useState(false)

    const handleChange=(e)=>{
        setQuery(e.target.value)
    }
    const fetchRecipe = async()=>{
       // const data = await fetchRecipes
       try {
        const data = await fetchRecipes({query, limit})
        setRecipes(data)
        setloading(false)
       } catch (error) {
        console.log(error)
       }finally{
        setloading(false)
       }
    }

    const handleSearchRecipe = async (e)=>{
        e.preventDefault()
        fetchRecipe()
    }
    const showMore=()=>{
        setlimit(prev => prev + 10)
        fetchRecipe();
    }
    useEffect(()=>{
     setloading(true)

     fetchRecipe()
    }, [])
    if(loading){
        return(
            <Loading/>
        )
    }
  return (
      <div className='w-full'>
        <div className='w-full flex items-center 
        justify-center pt-10 pb-5 px-0 md:px-0'>
            <form className='w-full lg:w-2/4'
            onSubmit={handleSearchRecipe}>
           <Searchbar placeholder='search through ingredients'
           
           handleInputChange={handleChange}
           rightIcon={
            <BiSearchAlt2 className='text-gray-600'/>
           }
           /> 
              
            </form>
        </div>
        {
            recipes ?.length > 0 ?(
               <>
                 <div className='w-full flex 
                 flex-wrap gap-10 px-10 lg:px-10 py-10'>
                    {
                        recipes?.map((item, indexedDB)=>(
                            <RecipeCard recipe={item} key={indexedDB}/>
                        ))
                    }
                 </div>
                 <div className='flex w-full items-center justify-center py-10'>
                    <button className='bg-green-800 text-white px-3 py-1 rounded-full text-sm'
                    onClick={showMore}
                    >Show more</button>

                 </div>
               </>
            ): <div className='text-white w-full 
            items-center justify-center py-10'>
                <p className='text-center'>No recipe found</p>
            </div>
        }
      </div>
  )
}

export default Recipe