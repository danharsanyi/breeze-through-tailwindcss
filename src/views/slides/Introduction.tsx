import React from 'react';
import { SideBySide } from '../../components/templates';

export const Introduction = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-teal col-span-4 h-screen p-12 ">
        <p className="text-white font-heading font-bold text-4xl">What is TailwindCSS?</p>
      </div>
      <div className="flex justify-center items-center col-span-8 h-screen p-12 text-center">
        <h2 className="font-heading text-4xl text-black">A Design System API using a set of "Utility First" building blocks</h2>
      </div>
    </>
  );
}