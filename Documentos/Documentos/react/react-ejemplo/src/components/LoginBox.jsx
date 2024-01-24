import React, { useState } from "react";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Realizar la autenticación
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Aprovecha el 100% de la altura de la pantalla
    }}>
      <form onSubmit={onSubmit} style={{
        width: 200,
        height: 200,
        margin: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: 100,
            height: 50,
            borderRadius: 5,
            marginBottom: 10, // Espacio entre los campos
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: 100,
            height: 50,
            borderRadius: 5,
            marginBottom: 10, // Espacio entre los campos
          }}
        />
        <button type="submit" style={{
          width: 100,
          height: 50,
          borderRadius: 5,
        }}>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginBox;

