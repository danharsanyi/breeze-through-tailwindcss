import React from 'react';
import { FullScreen } from '../../components/templates';
import { Card } from '../../components';

export default function Upsides() {
  return (
    <>
      <div className="flex justify-center items-center bg-teal col-span-full md:col-span-2 md:h-screen p-12">
        <h2 className="text-6xl">‎&#x1F44D;</h2>
      </div>
      <div className="flex col-span-full md:col-span-10 p-12 md:h-screen md:items-center">
          <ul className="font-heading text-lg md:text-2xl">
            <li className="pb-6 md:pb-8">&bull; You can build an entire site without needing custom CSS</li>
            <li className="pb-6 md:pb-8">&bull; Very quick to build and iterate, and design in the browser</li>
            <li className="pb-6 md:pb-8">&bull; Easy to build responsive designs out of the box</li>
            <li className="pb-6 md:pb-8">&bull; In this world of Components, JSX &amp; mixing Javascript and HTML, with utility classes a developer can read one file and get a good understanding of what to expect in the browser</li>
            <li className="pb-6 md:pb-8">&bull; These utilities are still 'semantic', they derive meaning from their purpose, rather than their content</li>
            <li className="pb-6 md:pb-8">&bull; Still feels a lot like traditional CSS</li>
            <li className="pb-6 md:pb-8">&bull; Easy to component-ise</li>
            <li className="pb-6 md:pb-4">&bull; Strong plugin ecosystem</li>
            <li className="pb-6 md:pb-4">&nbsp;&nbsp;&nbsp;&nbsp;&#9702; Webpack</li>
            <li className="pb-6 md:pb-4">&nbsp;&nbsp;&nbsp;&nbsp;&#9702; Forms</li>
            <li className="pb-6 md:pb-4">&nbsp;&nbsp;&nbsp;&nbsp;&#9702; VScode Intellisense </li>
          </ul>
      </div>
    </>
  )
}