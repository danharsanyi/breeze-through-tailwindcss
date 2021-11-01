import React from 'react';
import { FullScreen } from '../../components/templates';
import { Card } from '../../components'

export default function Config() {
  return (
    <>
      <div className="flex flex-col justify-center bg-teal col-span-6 h-screen p-12">
        <h2 className="font-heading font-bold text-3xl text-white pb-6">Easily extensible/customisable ‎&#x1F527;</h2>
        <ul className="font-heading text-2xl text-white">
          <div className="pb-12">
            <li className="pb-2">&bull; Use <code className="p-1 text-black">tailwind.config.js</code> to build up your own design system</li>
            <li className="pb-2">&bull; Classes will be auto generated</li>
          </div>
        </ul>
        <div className="flex flex-col bg-black w-max">
          <code className="p-1 text-terminal-green">text-terminal-green</code>
          <code className="p-1 text-terminal-green">text-teal</code>
          <code className="p-1 text-terminal-green">text-white</code>
          <code className="p-1 text-terminal-green">text-black</code>
          <code className="p-1 text-terminal-green">bg-terminal-green</code>
          <code className="p-1 text-terminal-green">bg-teal</code>
          <code className="p-1 text-terminal-green">bg-white</code>
          <code className="p-1 text-terminal-green">bg-black</code>
          <code className="p-1 text-terminal-green">font-heading</code>
          <code className="p-1 text-terminal-green">font-body</code>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white col-span-6 h-screen p-12 text-center">
        <Card className="bg-white p-0 mb-6">
          <img src="/dist/assets/images/config-example.png" className="w-full" />
        </Card>
      </div>
    </>
  )
}
