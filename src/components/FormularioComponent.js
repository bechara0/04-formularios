import React, { useState } from "react";

export const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});
  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value,
    };
    console.log(usuario);

    setUsuario(usuario);
  };

  const cambiarDatos = (e) => {
    let name_del_input = e.target.name;
    let usuario_para_modificar = usuario;
    setUsuario((estado_previo) => ({
      ...estado_previo,
      [name_del_input]: e.target.value,
    }));
  };
  //usuario_para_modificar[name_del_input] = e.target.value;

  return (
    <div>
      <h1>Formularios en React</h1>
      {usuario.enviar && (
        <div className="info_usuario">
          {usuario.nombre} {usuario.apellido}, su género es {usuario.genero}, y
          su biografía es: <p>{usuario.bio}</p>
        </div>
      )}
      <form onSubmit={conseguirDatosForm}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={cambiarDatos}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={cambiarDatos}
        />
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea
          placeholder="Biografía"
          name="bio"
          onChange={cambiarDatos}
        ></textarea>
        <input type="submit" value="Enviar" name="enviar" />
      </form>
    </div>
  );
};
