import React from 'react'

function Input({onChange}) {
    return (
        <div className="flex justify-center w-full items-center space-x-2 md:w-1/3 m-4 ">
        <input onChange={onChange}
          className="flex w-36 h-10 bg-slate-300 text-black rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Search"
        ></input>
        <button
          type="button"
          className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Search
        </button>
      </div>
    )
}

export default Input