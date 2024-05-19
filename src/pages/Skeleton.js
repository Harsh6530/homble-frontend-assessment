// src/components/Skeleton.jsx
import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width, height }) => {
  const skeletonStyle = {
    width: width || '100%', // Default to 100% width if not provided
    height: height || '100%', // Default to 100% height if not provided
  };

  return (
    <div className="skeleton" style={skeletonStyle}>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
};

export default Skeleton;
