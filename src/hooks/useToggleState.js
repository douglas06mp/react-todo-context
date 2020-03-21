import { useState } from 'react';
export default function useToggle(initValue = false) {
  const [state, setState] = useState(initValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
