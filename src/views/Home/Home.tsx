import React, {useState} from 'react';
import {
  ComponentExample,
  ComponentIntro,
  Config,
  Downsides,
  Introduction,
  ProblemExample,
  ProblemIntro,
  Title,
  UtilityIntro,
  UtilityExamples,
  Upsides,
  Wrapup
} from '../slides';
import { Link, useParams } from 'react-router-dom';

const SLIDES = [
  Title,
  Introduction,
  UtilityIntro,
  UtilityExamples,
  ProblemIntro,
  ProblemExample,
  ComponentIntro,
  ComponentExample,
  Upsides,
  Config,
  Downsides,
  Wrapup
]

type Props = {};

export const Home = ( props: Props ) => {
  // @ts-ignore
  const { index } = useParams();
  const Component = SLIDES[index];

  return (
    <Link to={ index < (SLIDES.length -1) ? `/${Number(index) + 1}` : `/${Number(index)}`} className="grid grid-cols-12 grid-rows-6 h-screen">
        <Component />
    </Link>
  );
}