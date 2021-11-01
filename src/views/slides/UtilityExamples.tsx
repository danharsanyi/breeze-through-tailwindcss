import React from 'react';
import { FullScreen } from '../../components/templates';

import { Card } from '../../components';

export const UtilityExamples = () => {
  return (
    <FullScreen>
      <div className="flex w-full gap-8 pb-12">
        <div className="flex-grow">
          <Card className="transform transition ease-in-out duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="font-heading font-bold text-teal text-3xl p-6">Layout</h2>
              <ul className="text-xl">
                <li><code>flex</code></li>
                <li><code>gap-2</code></li>
                <li><code>justify-center</code></li>
                <li><code>ml-8</code></li>
                <li><code>w-64</code></li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="flex-grow">
          <Card className="transform transition ease-in-out duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="font-heading font-bold text-teal text-3xl p-6">Presentation</h2>
              <ul className="text-xl">
                <li><code>bg-teal</code></li>
                <li><code>rounded-md</code></li>
                <li><code>scale-90</code></li>
                <li><code>shadow-md</code></li>
                <li><code>text-red-500</code></li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="flex-grow">
          <Card className="transform transition ease-in-out duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="font-heading font-bold text-teal text-3xl p-6">Typography</h2>
              <ul className="text-xl">
                <li><code>font-bold</code></li>
                <li><code>font-heading</code></li>
                <li><code>italic</code></li>
                <li><code>leading-8</code></li>
                <li><code>text-lg</code></li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex w-full gap-8 pb-12">
        <div className="flex-grow">
          <Card className="transform transition ease-in-out duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="font-heading font-bold text-teal text-3xl p-6">Animations</h2>
              <ul className="text-xl">
                <li><code>animate-spin</code></li>
                <li><code>delay-300</code></li>
                <li><code>ease-in-out</code></li>
                <li><code>transition-opacity</code></li>
                <li><code>transition-shadow</code></li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="flex-grow">
          <Card className="transform transition ease-in-out duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h2 className="font-heading font-bold text-teal text-3xl p-6">Transforms</h2>
              <ul className="text-xl">
                <li><code>transform</code></li>
                <li><code>origin-center</code></li>
                <li><code>scale-105</code></li>
                <li><code>rotate-12</code></li>
                <li><code>skew-y-6</code></li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="flex-grow">
          <Card className="transform transition ease-in-out duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h2 className="font-heading font-bold text-teal text-3xl p-6">Responsive</h2>
              <ul className="text-xl">
                <li><code>sm:bg-teal</code></li>
                <li><code>md:font-bold</code></li>
                <li><code>lg:flex</code></li>
                <li><code>sm:italic</code></li>
                <li><code>sm:text-sm</code></li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex w-full gap-8 pb-12 justify-center">
        <code className="bg-black text-terminal-green text-xl">{`<Card className="transform transition ease-in-out duration-300 hover:scale-105 hover:shadow-xl">`}</code>
      </div>
    </FullScreen>
  );
}
