import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Card({item,onclick}) {

 
    return (
        <div className='flex'>
             <section  className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 ">
          <article className="max-w-[24rem] mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-repeat-round bg-sky-700 text-white" >
                            {/* <a href={items.href}> */}
                                <img src={item.image} loading="lazy" className="w-full h-48 rounded-t-md object-cover" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="ml-3">
                                        <span className="block text-gray-100 font-semibold">{item.title}</span>
                                        <span className="block text-gray-300 text-sm">Brand: {item.brand}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-yellow-300">
                                      ${item.price}
                                    </h3>
                                    
                                    <div>
                                    <Link to={`/${item.id}`}>
                                    <button className='bg-white text-black hover:border-b-2 p-2 m-2'>
                                        view details
                                    </button>
                                    </Link>
                                    <button onClick={onclick} className='bg-white text-black hover:border-b-2 p-2 m-2'>
                                        Add to cart
                                    </button>
                                    </div>
                                </div>
                            {/* </a> */}
                        </article>
        </section> 
        </div>
    )
}

export default Card
