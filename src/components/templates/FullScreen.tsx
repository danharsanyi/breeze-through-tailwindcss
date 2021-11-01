import React from 'react';

type Props = {
  bg: string;
  children: React.ReactNode;
};

export const FullScreen = ({ bg, children }: Props) => {
  return (
    <div className={`flex flex-col justify-center items-center col-span-full row-span-full bg-${bg}`}>
      { children && children }
    </div>
  )
}