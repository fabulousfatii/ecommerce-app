import React from 'react'

function Chips({category,onClick}) {
    return (
        
 <button onClick={onClick} type="button" className="py-2 px-5 border-white hover:bg-sky-900 focus:ring-sky-500 focus:ring-offset-pink-200 bg-sky-600 text-white w-1/6 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl">
    {category}
</button>
      
    )
}

export default Chips
