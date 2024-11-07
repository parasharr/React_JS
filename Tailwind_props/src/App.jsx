import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-cyan-950 p-4 rounded-lg">Tailwind Test</h1>
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://avatarfiles.alphacoders.com/325/thumb-1920-325764.jpg" alt="" width="384" height="512"></img>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
  </div>
</figure>


<div class="flex p-6 font-mono">
  <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
    <img src="https://www.footlocker.ph/media/wysiwyg/Infinite_1200x1200.jpg" alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto pl-6">
    <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
      <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        Retro Shoe
      </h1>
      <div class="relative text-lg text-white">
        $89.00
      </div>
      <div class="relative uppercase text-teal-400 ml-3">
        In stock
      </div>
    </div>
    <div class="flex items-baseline my-6">
      <div class="space-x-3 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-4">
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
          Buy now
        </button>
        <button class="px-6 h-12 uppercase font-semibold tracking-wider bg-slate-500 border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-xs leading-6 text-slate-500">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>



<div className='flex justify-around max-md:flex-wrap max-sm:flex-wrap'>
<Card username={"https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"}/>
<Card username={"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnVjYnZjMXhhMzJxa2htbDlvemRhZzgxdnh0ejVnZDJkcGMwY3BzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qF2y0VXvbJV9V3ggC5/giphy.gif"}/>
</div>



<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing
              </div>
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </div>
            </div>
            <div className="px-12 text-center sm:px-0">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-black  sm:w-12 sm:h-12">
                <p>icon</p>
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">Lorem ipsum</h6>
              <div className="mb-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing{' '}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
      

export default App
