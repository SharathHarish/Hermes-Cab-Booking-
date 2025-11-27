import { useEffect, useState } from 'react';

export default function Cabs() {
  const [cabs, setCabs] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('/api/cabs', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setCabs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Cabs</h1>
      <ul>
        {cabs.map(cab => (
          <li key={cab.id}>
            {cab.name} - {cab.type} - {cab.plate_number}
          </li>
        ))}
      </ul>
    </div>
  );
}
