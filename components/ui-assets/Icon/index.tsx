import React from 'react';
import { ReactSVG } from 'react-svg';
type Props ={
  name?:string;
  className?:string;
  color?:any;
  size?:any;
  transform?:string;
  rest?:any;
}
type BeforeEach = (svg: SVGSVGElement|any) => void;
export default function Icon({ name,className , color="#232323", size=24, transform, ...rest }:Props) {

  const handleBeforeInjection: BeforeEach = (svg) => {
   
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('style', `transform: ${transform}`);  
      svg.setAttribute('fill',color);
             svg.querySelector('path').setAttribute('fill',color);
      [...svg.querySelectorAll('path')].map(path => path.setAttribute('fill', color));
  
  
  };
    return (
      <ReactSVG
      src={`/Icons/${name}.svg`}
      className={className}
      beforeInjection={handleBeforeInjection}
      afterInjection={handleBeforeInjection}
      {...rest}
      wrapper="span"
    />
    
      );
  };


