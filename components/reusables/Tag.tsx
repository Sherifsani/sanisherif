import React from 'react'

const Tag = ({text, styles}:{text:string, styles?:string}) => {
  return <p className={`tag text-black text-xl font-[500] ${styles}`}>[{text}]</p>;
}

export default Tag