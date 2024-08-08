import { useEffect, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/generateUser')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los usuarios:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(value)
    );
    setFilteredUsers(filtered);
  };
  
  if (loading) {
    return <p className="text-center text-gray-500">Cargando...</p>;
  }

  if (filteredUsers.length === 0) {
    return <p className="text-center text-gray-500">No se encontraron usuarios</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-600 mb-10">Lista de Usuarios</h1>
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-4">
        {filteredUsers.map((user, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <img src={user.picture} alt={user.name} className="w-24 h-24 rounded-full border-4 border-gray-500" />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.gender}</p>
              <p className="text-gray-600 flex justify-center"><CiLocationOn className='mt-1'/> {user.location}</p>
              <p className="text-gray-600 mt-2">{user.email}</p>
              <p className="text-gray-600 mt-2">Fecha de Nacimiento: {new Date(user.dob).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
