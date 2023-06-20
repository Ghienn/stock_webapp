'use client'

import Nav from "@/components/Nav/page"

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <body className="bg-gray-100">
      <main>
        <div className="flex md:flex-row-reverse flex-wrap">
            <div className="h-full w-full md:w-1/4 bg-gray-500 p-4 text-center text-gray-200">1</div>
            <div className="h-full md:w-3/4 bg-gray-400 p-4 text-center text-gray-700">2</div>
        </div>
      </main>
      </body>
    </>
  )
}
