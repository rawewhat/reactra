import React from "react";
import { Button } from 'antd'

const HomeScreen = () => {
  return (
    <div>
      {typeof window !== 'undefined' && window.document !== undefined
        ? 'CLIENT'
        : 'SERVER'}
        <Button>AntD</Button>
    </div>
  );
};

export default HomeScreen;