import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/generateUser')
      .then(response => response.json())
      .then(data => {
        console.log('Usuarios recibidos:', data); // Verifica los datos recibidos
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los usuarios:', error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <p className="text-center text-gray-500">Cargando...</p>;
  }

  if (users.length === 0) {
    return <p className="text-center text-gray-500">No se encontraron usuarios</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Lista de Usuarios</h1>
      <div className="w-full max-w-5xl bg-white p-5 rounded-lg shadow-lg">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 text-center">Foto</th>
              <th className="px-4 py-3 text-center">Genero</th>
              <th className="px-4 py-3 text-center">Nombre</th>
              <th className="px-4 py-3 text-center">Ubicación</th>
              <th className="px-4 py-3 text-center">Correo Electrónico</th>
              <th className="px-4 py-3 text-center">Fecha de Nacimiento</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="odd:bg-gray-50 even:bg-white border-b">
                <td className="px-4 py-3">
                  <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full" />
                </td>
                <td className="px-4 py-3 text-gray-800 text-center">{user.gender}</td>
                <td className="px-4 py-3 text-gray-800 text-center">{user.name}</td>
                <td className="px-4 py-3 text-gray-800 text-center">{user.location}</td>
                <td className="px-4 py-3 text-gray-800 text-center">{user.email}</td>
                <td className="px-4 py-3 text-gray-800 text-center">{new Date(user.dob).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
