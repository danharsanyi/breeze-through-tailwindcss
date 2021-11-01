import React from 'react';

export const Card = ({ children, className }: any) => {
  return (
    <div className={`shadow-lg rounded-md p-4 ${className}`}>
      { children }
    </div>
  )
}