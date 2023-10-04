import { useState } from 'react';

const useHelloWorld = () => {
  const [value, setValue] = useState('');

  return { value, setValue };
};

export default useHelloWorld;
