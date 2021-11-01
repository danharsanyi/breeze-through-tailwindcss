import React from 'react';
import { FullScreen } from '../../components/templates';
import { Card } from '../../components'

export const ProblemExample = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-white col-span-6 h-screen p-12">
        <ul className="font-heading text-2xl text-black">
          <div className="pb-12">
            <li className="pb-2">&bull; 'Separation of concerns' dictates that our CSS depends on HTML</li>
            <li className="pb-2">&nbsp;&nbsp;&nbsp;&nbsp; &#9702; ie. we write a class based on the content, then style that accordingly</li>
            <li className="italic pb-2">&nbsp;&nbsp;&nbsp;&nbsp; &#9702; "authors are encouraged to use values that describe the nature of the content, rather than values that describe the desired presentation of the content."</li>
            <li className="pb-2">&nbsp;&nbsp;&nbsp;&nbsp; &#9702; There is no 'real' reason that this has to be the case!</li>
          </div>
          <div>
            <li className="pb-2">&bull; Typical BEM style syntax methodology has a couple of flaws</li>
            <li className="pb-2">&nbsp;&nbsp;&nbsp;&nbsp; &#9702; Syntax can be hard to read (dashes, underscores, double underscores, when do I use what)?</li>
            <li className="pb-2">&nbsp;&nbsp;&nbsp;&nbsp; &#9702; Encourages styles to get duplicated over similar components</li>
          </div>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center bg-teal col-span-6 h-screen p-12 text-center">
        <Card className="bg-white p-0 mb-6">
          <img src="/dist/assets/images/bem-example.png" className="w-full" />
        </Card>
        <p className="text-6xl">&#129326;</p>
      </div>
    </>
  )
}

{/* <div className="author-bio">
  <img className="author-bio__image" src="https://dans-face.png" />
  <div className="author-bio__content">
    <h2 className="author-bio__name">Dan Harsanyi</h2>
    <p className="author-bio__body">
      Dan is a cool guy who likes giving informative presentations
    </p>
  </div>
</div> */}