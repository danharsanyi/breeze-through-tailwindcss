import React from 'react';
import { FullScreen } from '../../components/templates';
import { Card } from '../../components';

export default function ComponentExample() {
  return (
    <FullScreen bg="teal">
      <Card className="bg-white mb-8" >
        <video autoPlay muted>
          <source src="/dist/assets/images/tailwindcss-demo.mov" type="video/mp4"></source>
        </video>
      </Card>
      <h2 className="font-heading text-xl text-white">Source: <a href="https://tailwindcss.com/" className="underline">TailwindCSS Homepage</a> ‎&#x1F64F;</h2>
    </FullScreen>
  )
}