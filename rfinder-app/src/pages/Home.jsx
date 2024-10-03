import React from 'react'
import Header from '../components/Header'
import Recipe from '../components/Recipe'
function Home() {
  return (
    <main className='w-full flex flex-col'>
    
        <Header
        title={
            <p>
                Taste the World with
                <br />Recipes!
            </p>
        }
        type='home'
        />
        <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
            <Recipe/>
        </section>
    </main>
  )
}

export default Home