function saludar(nombre, hora, genero, edad, idioma) {
  if(nombre === ""){
    nombre = "visitante";

  }
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
  } else if (idioma === "en") {
    if (hora >= 6 && hora < 12) {
      saludo = "Good morning";
    } else if (hora >= 12 && hora < 19) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good evening";
    }

    bienvenida = "welcome";

    if (edad > 30) {
      if (genero === "M") {
        tratamiento = "Mr. ";
      } else {
        tratamiento = "Mrs. ";
      }
    }
  }

  return saludo + " " + tratamiento + nombre + ", " + bienvenida;
}

export default saludar;