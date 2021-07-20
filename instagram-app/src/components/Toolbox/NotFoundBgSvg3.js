import React from 'react';

const NotFoundBgSvg3 = ({color}) => {
   return (
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="frown-open"
           className="svg-inline--fa fa-frown-open fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 496 512">
         <path fill={color || "currentColor"}
               d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
      </svg>
   )
}

export default NotFoundBgSvg3;
