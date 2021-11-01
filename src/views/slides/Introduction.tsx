import React from 'react';
import { Logo } from '../../components';
import { SideBySide } from '../../components/templates';

export const Introduction = () => {
  return (
    <SideBySide>
      <div className="flex justify-center items-center bg-teal col-span-6 h-screen">
        <p className="text-white">A Breeze through TailwindCSS</p>
      </div>
      <div className="flex justify-center items-center bg-teal col-span-6 h-screen">
        <p className="text-white">A Breeze through TailwindCSS 3</p>
      </div>
    </SideBySide>
  );
}