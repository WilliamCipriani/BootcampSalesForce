import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { data } = await axios.get('https://randomuser.me/api/?results=10');

    const users = data.results.map(user => ({
      gender: user.gender,
      name: `${user.name.first} ${user.name.last}`,
      location: `${user.location.city}, ${user.location.country}`,
      email: user.email,
      dob: user.dob.date,
      picture: user.picture.medium,
    }));

    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al generar la lista de usuarios' });
  }
}
