import { ChangeEvent } from 'react';

const EventComponent: React.FC = () => {
  const onChange = (e: ChangeEvent) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
