import React from 'react';
import { FullScreen } from '../../components/templates';

export default function ComponentIntro() {
  return (
    <FullScreen bg="teal">
      <h2 className="font-heading font-bold text-6xl text-white">Show me some <code className="bg-black text-terminal-green px-2">code</code> ‎<span className="animate-pulse">&#x1F4BB;</span></h2>
    </FullScreen>
  )
}