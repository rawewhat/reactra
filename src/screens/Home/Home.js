import React from "react";
import useStora from '@rawewhat/stora'

const HomeScreen = () => {
  const [states, actions] = useStora()
  console.log('HomeScreen states', states, 'actions', actions)
  return (
    <div>
      {typeof window !== 'undefined' && window.document !== undefined
        ? 'CLIENT'
        : 'SERVER'}
    </div>
  );
};

export default HomeScreen;