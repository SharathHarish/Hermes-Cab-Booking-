import { useEffect, useState } from 'react';

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('/api/drivers', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setDrivers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Drivers</h1>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id}>
            {driver.name} - {driver.phone} - {driver.license_number}
          </li>
        ))}
      </ul>
    </div>
  );
}
