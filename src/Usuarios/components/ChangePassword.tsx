import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
      });
      return;
    }
    console.log(sessionStorage.getItem('token'));
    try {
      /* const response = await axios.post(`http://localhost:8080/apitestswagger/users/changepassword`, { */
      const response = await axios.post(`https://10.14.36.33:8443/apitestswagger/users/changepassword`,{
        oldPassword,
        newPassword,
      }, {
        headers: {
          Authorization: `${sessionStorage.getItem('token')}`, // Asegúrate de que el token esté almacenado en localStorage
        },
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Contraseña actualizada correctamente.',
        });
        // Reiniciar los campos del formulario
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (err) {
        console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al cambiar la contraseña. Verifica la contraseña actual.',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-empresa-negro">Cambiar Contraseña</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Contraseña Actual</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-empresa-verde"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Nueva Contraseña</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-empresa-verde"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Confirmar Nueva Contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-empresa-verde"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-empresa-verde text-white py-2 rounded-md hover:bg-bg-empresa-verde-dark transition duration-200"
        >
          Cambiar Contraseña
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
