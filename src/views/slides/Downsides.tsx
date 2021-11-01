import React from 'react';

export default function Downsides() {
  return (
    <>
      <div className="flex col-span-10 items-center h-screen p-12">
          <ul className="font-heading text-2xl">
            <li className="pb-8">&bull; Pollution of HTML with lots of classes can make legibility difficult</li>
            <li className="pb-8">&bull; CSS purists will cry out that we are blurring Separation of Concerns</li>
            <li className="pb-8">&bull; It can make you lazy with understanding what's actually going on under the hood</li>
            <li className="pb-8">&bull; It's very easily to throw in padding and margin utilities to nudge content around, leading to design inconsistencies (negated by the fact that the design system enforces set values)</li>
          </ul>
      </div>
      <div className="flex justify-center items-center bg-teal col-span-2 h-screen p-12">
        <h2 className="text-6xl">‎&#x1F44E;</h2>
      </div>
    </>
  )
}