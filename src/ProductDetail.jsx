import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from "react-router-dom";

function ProductDetail() {
    const {id} = useParams()
    const [items, setitems] = useState({})

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> setitems(json))
    })


    return (
     
            <section  className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
          <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-repeat-round bg-purple-300" >
                            <a href={items.href}>
                                <img src={items.image} loading="lazy" className="w-full h-48 rounded-t-md " />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        {/* <img src={items.images[1]} className="w-full h-full rounded-full"  /> */}
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.title}</span>
                                        <span className="block text-gray-400 text-sm">{items.price}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.description}</p>
                                </div>
                            </a>
                        </article>
        </section>
       
    )
}

export default ProductDetail