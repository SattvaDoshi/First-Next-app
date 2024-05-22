'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  // const featuredWebinars = [
  //   {
  //     title: 'Understanding Music Theory',
  //     description:
  //       'Dive deep into the fundamentals of music theory and enhance your musical skills.',
  //     slug: 'understanding-music-theory',
  //     isFeatured: true,
  //   },
  //   {
  //     title: 'The Art of Songwriting',
  //     description:
  //       'Learn the craft of songwriting from experienced musicians and songwriters.',
  //     slug: 'the-art-of-songwriting',
  //     isFeatured: true,
  //   },
  //   {
  //     title: 'Mastering Your Instrument',
  //     description:
  //       'Advanced techniques to master your musical instrument of choice.',
  //     slug: 'mastering-your-instrument',
  //     isFeatured: true,
  //   },
  //   {
  //     title: 'Music Production Essentials',
  //     description:
  //       'Get started with music production with this comprehensive overview.',
  //     slug: 'music-production-essentials',
  //     isFeatured: true,
  //   },
  //   {
  //     title: 'Live Performance Techniques',
  //     description:
  //       'Enhance your live performance skills with expert tips and strategies.',
  //     slug: 'live-performance-techniques',
  //     isFeatured: true,
  //   },
  //   {
  //     title: 'Digital Music Marketing',
  //     description:
  //       'Learn how to promote your music effectively in the digital age.',
  //     slug: 'digital-music-marketing',
  //     isFeatured: true,
  //   },
  // ];

  return (
    <div className="pt-5 bg-gray-900" id="pricing">
      <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Whether it's just you, or your entire team - we've got you covered.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose the product that works best
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* First Product */}
          <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-lg font-semibold leading-8 text-white">
                Product Type 1
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Product details for Product Type 1
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">₹ 100 / unit</span>
              <span className="text-sm font-semibold leading-6 text-gray-300"></span>
            </p>
            <Link href="#" aria-describedby="product1" className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Order Now
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                40 units
              </li>
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                1 feature
              </li>
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                Fast delivery
              </li>
            </ul>
          </div>
          <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-lg font-semibold leading-8 text-white">
                Product Type 1
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Product details for Product Type 1
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">₹ 100 / unit</span>
              <span className="text-sm font-semibold leading-6 text-gray-300"></span>
            </p>
            <Link href="#" aria-describedby="product1" className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Order Now
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                40 units
              </li>
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                1 feature
              </li>
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                Fast delivery
              </li>
            </ul>
          </div>
          <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h2 id="product1" className="text-lg font-semibold leading-8 text-white">
                Product Type 1
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Product details for Product Type 1
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">₹ 100 / unit</span>
              <span className="text-sm font-semibold leading-6 text-gray-300"></span>
            </p>
            <Link href="#" aria-describedby="product1" className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Order Now
            </Link>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                40 units
              </li>
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                1 feature
              </li>
              <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-white">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                </svg>
                Fast delivery
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
        
  )}

        export default UpcomingWebinars;
