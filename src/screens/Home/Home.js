import React from "react";

const HomeScreen = () => {
  return (
    <div>
      {typeof window !== 'undefined' && window.document !== undefined
        ? 'CLIENT'
        : 'SERVER'}
    </div>
  );
};

export default HomeScreen;