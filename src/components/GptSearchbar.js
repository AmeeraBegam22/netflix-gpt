import React from 'react'
import lang from '../utils/langaugeConstant'
import { useSelector } from 'react-redux'


const GptSearchbar = () => {
  const LangKey = useSelector(store => store.config.lang);
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='bg-black text-white w-1/2 grid grid-cols-12'>
            <input type = "text"
                    className='p-2  m-2 col-span-9'
                    placeholder={lang[LangKey].gptSearchPlaceHolder}></input>
             <button 
             className='py-1 px-1 bg-red-600 text-white rounded-lg col-span-3 m-2'>{lang[LangKey].search}</button>
        </form>
       
    </div>
  )
}

export default GptSearchbar