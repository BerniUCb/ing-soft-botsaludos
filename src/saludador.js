function saludar(nombre, hora, genero, edad,idioma) {
  let saludo;
  let bienvenida;
  let tratamiento = "";

if (idioma === "es") {
  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }


  if (genero === "M") {
    bienvenida = "bienvenido";
  } else {
    bienvenida = "bienvenida";
  }


  if (edad > 30) {
    if (genero === "M") {
      tratamiento = "Sr. ";
    } else {
      tratamiento = "Sra. ";
    }
  }
}

  return saludo + " " + tratamiento + nombre + ", " + bienvenida;
}

export default saludar;     