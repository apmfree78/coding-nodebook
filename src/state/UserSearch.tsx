import { stringify } from 'querystring';
import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Micheal', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>

      <input
        value={name}
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch;
