function saludar(nombre, hora , genero) {
  let saludo;

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  let bienvenida;
  if(genero=="M"){
    bienvenida="bienvenido";

  }else {
    bienvenida="bienvenida";
  }

  return saludo + " " + nombre + ", " + bienvenida;
}

export default saludar;