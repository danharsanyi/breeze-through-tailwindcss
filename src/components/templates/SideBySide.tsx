import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const SideBySide = ({ children }: Props) => {
  return (
    <>
      { children && children }
    </>
  )
}