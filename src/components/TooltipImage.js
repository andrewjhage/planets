import React from 'react';
import Tooltip from './TooltipImage';

const TooltipImages = ({ src, alt, tooltipContent }) => {
  return (
    <Tooltip content={tooltipContent}>
      <img
        src={src}
        alt={alt}
        className="w-120 h-auto shadow-2xl rounded-lg mt-8"
      />
    </Tooltip>
  );
};

export default TooltipImages;
