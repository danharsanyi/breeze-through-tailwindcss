import React from 'react';
import { FullScreen } from '../../components/templates';

export default function Wrapup() {
  return (
    <FullScreen bg="teal">
      <div className="text-center pb-12">
        <h2 className="font-heading font-bold text-6xl text-white pb-6">That's it! ‎&#x1F4AA;</h2>
        <h4 className="font-heading text-3xl text-white pb-6">https://github.com/danharsanyi/breeze-through-tailwindcss</h4>
      </div>
      <p className="font-heading font-bold text-xl text-white pb-6">Additional reading:</p>
      <p className="font-heading text-xl text-white pb-2">https://adamwathan.me/css-utility-classes-and-separation-of-concerns/</p>
      <p className="font-heading text-xl text-white pb-2">http://nicolasgallagher.com/about-html-semantics-front-end-architecture/</p>
    </FullScreen>
  )
}