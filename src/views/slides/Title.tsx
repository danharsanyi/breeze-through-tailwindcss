import React from 'react';
import { Logo } from '../../components';
import { FullScreen } from '../../components/templates';

export const Title = () => {
  return (
    <FullScreen bg="teal">
      <div className="w-1/2 pb-16">
        <Logo iconColour="white" />
      </div>
      <div>
        <p className="text-white text-4xl font-heading font-semibold">A Breeze Through TailwindCSS &#x1F4A8;</p>
      </div>
    </FullScreen>
  );
}