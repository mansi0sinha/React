import Card from './components/card';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">

        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}

      </div>
    </>
  );
}

export default App;