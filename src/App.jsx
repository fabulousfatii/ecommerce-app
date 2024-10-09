import { useEffect } from 'react'
import { useState } from 'react'
import Card from './components/Card'
import Chips from './components/Chips'
import Navbar from './components/Navbar'
import Input from './components/Input'
import useCart from './hook/useCart'
import {Link} from "react-router-dom"


function App() {
  const [data, setData] = useState([])
  const [categories,setcategories]=useState([])
  const [ischoosen,setchoosen]= useState(null)
  const [limit,setlimit]=useState(10)
  const [loading,setloading]=useState(false)

  const {cart,addcart}=useCart()


  const url = ischoosen? `https://fakestoreapi.in/api/products/category?type=${ischoosen}` :  `https://fakestoreapi.in/api/products?limit=${limit}`
  useEffect(()=>{
    setloading(true)
    fetch(url)
    .then(res=>res.json())
    .then(json=>setData(json.products))
    setloading(false)
 

  },[ischoosen,limit])

  useEffect(()=>{
    fetch('https://fakestoreapi.in/api/products/category')
    .then(res=>res.json())
    .then(json=>setcategories(json.categories))
  },[])

  console.log(data);
   
  const handlescroll= ()=>{
    console.log(document.documentElement.scrollHeight);
    console.log("both height",window.innerHeight +document.documentElement.scrollTop );
    if(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight){
      setlimit(limit+5)
      
    }
    
  }
  useEffect(()=>{
    window.addEventListener("scroll",handlescroll)
    return ()=> window.removeEventListener("scroll",handlescroll)
    
  },[limit])

  const filterdata=(e)=>{
  const target = e.target.value

  if (target !== '') {
    const filtereddata= data.filter((value)=>{
      return value.title.toLowerCase().includes(target.toLowerCase())
    })  
    setData(filtereddata)
  }
  else{
    fetch(url)
    .then(res=>res.json())
    .then(json=>setData(json))
  }

  
}
  


  return (
   <main>
      <Navbar/>
    <div className='w-screen flex flex-col items-center justify-center'>
    
      
      <div className='w-[80vw] h-80 bg-[#317cb9] text-center flex flex-col justify-center items-center rounded-xl mt-20'>
           <h1 className='font-semibold'>Get the Best Products</h1>
           <button className='bg-blue-950 hover:border-white'>
            View Products
           </button>
      </div>
      <h1 className='text-black mt-11' >{loading? "loading":null}</h1>
      <div className='flex justify-between  '>
      <Input onChange={(e)=> filterdata(e) }/>
     <Link to={"/cart"}><h3 className='text-2xl w-20 bg-sky-800 m-2  py-1 rounded-xl text-center '>Cart {cart.length}</h3></Link>
      </div>

         
    <div className='flex gap-2 mx-5'>

    <Chips category={"All"}
    onClick={()=>setchoosen(null)}/>

      {categories.map((category,index)=>(
        <Chips key={index} category={category} 
        onClick={()=>{
          setchoosen(category)
        }  }/>
      ))}
    </div>

    <div className='flex flex-wrap'>
    { data.map((value)=>(
        
        <Card key={value.id} item={value} onclick={()=> addcart(value)} />
    )) }
    
    </div>
   </div>
   </main>
  )
}

export default App
