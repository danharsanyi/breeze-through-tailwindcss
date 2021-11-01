import React from 'react';
import { SideBySide } from '../../components/templates';
import { Card } from '../../components';

export const UtilityIntro = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-white col-span-6 h-screen p-12 text-center">
        <h2 className="font-heading text-3xl text-black">Rather than adding an element class names with modifers like <span className="bg-black text-terminal-green"><code>"btn btn__primary"</code></span> and then targeting those classes with styles, we use predefined CSS building blocks to style our application</h2>
      </div>
      <div className="flex justify-center items-center bg-teal col-span-6 h-screen p-12 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">What does Utility First mean?</h2>
      </div>
    </>
  );
}