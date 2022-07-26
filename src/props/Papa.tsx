import { Child } from './Child';

const Papa = () => {
  return (
    <Child color='red' onClick={() => console.log('clicked')}>
      abc
    </Child>
  );
};

export default Papa;
