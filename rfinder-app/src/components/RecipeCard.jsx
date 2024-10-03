import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
    // Safely access properties with optional chaining and provide default fallbacks
    const { image, label, cuisineType, dietLabels, mealType, uri } = recipe?.recipe || {};
    
    // Ensure uri exists before trying to split it
    const id = uri ? uri.split("#")[1] : null;

    // Don't render the card if required fields are missing
    if (!image || !label || !id) {
        return null;
    }

    return (
        <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
            <div className='bg_gradient shadow w-full rounded-lg'>
                <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[150px] w-full'/>

                <div className='p-3'>
                    <p className='text-white font-semibold'>
                        {label}
                    </p>
                    <div className='mt-2'>
                        
                        {cuisineType && (
                            <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500'>
                                {cuisineType}
                            </span>
                        )}
                        {mealType && (
                            <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500'>
                                {mealType}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard;
