import React, {useState} from 'react';
import { Introduction, Title } from '../slides';
import { Link, useParams } from 'react-router-dom';

const SLIDES = [
  Title,
  Introduction
]

type Props = {};

export const Home = ( props: Props ) => {
  // @ts-ignore
  const { index } = useParams();
  const Component = SLIDES[index];

  return (
    <Link to={`/${Number(index) + 1}`} className="grid grid-cols-12 grid-rows-6 h-screen">
        <Component />
    </Link>
  );
}