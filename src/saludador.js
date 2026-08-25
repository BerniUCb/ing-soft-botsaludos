function saludar(nombre, hora, genero, edad) {
  let saludo;

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let bienvenida;
  if (genero === "M") {
    bienvenida = "bienvenido";
  } else {
    bienvenida = "bienvenida";
  }

  let tratamiento = "";
  if (edad > 30) {
    if (genero === "M") {
      tratamiento = "Sr. ";
    } else {
      tratamiento = "Sra. ";
    }
  }

  return saludo + " " + tratamiento + nombre + ", " + bienvenida;
}

export default saludar;