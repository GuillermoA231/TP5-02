/* # 2- Crea una clase llamada Persona que siga las siguientes condiciones:Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.

Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/

const form = document.querySelector("#formUsuario");
const btn1 = document.querySelector("#textoGeneracion");
const btn2 = document.querySelector("#esMayor");
class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombreNuevo) {
    this.#nombre = nombreNuevo;
  }
  get edad() {
    return this.#edad;
  }
  set edad(edadNuevo) {
    this.#edad = edadNuevo;
  }
  get dni() {
    return this.#dni;
  }
  set dni(dniNuevo) {
    this.#dni = dniNuevo;
  }
  get sexo() {
    return this.#sexo;
  }
  set sexo(sexoNuevo) {
    this.#sexo = sexoNuevo;
  }
  get peso() {
    return this.#peso;
  }
  set peso(pesoNuevo) {
    this.#peso = pesoNuevo;
  }
  get altura() {
    return this.#altura;
  }
  set altura(alturaNuevo) {
    this.#altura = alturaNuevo;
  }
  get anioNacimiento() {
    return this.#anioNacimiento;
  }
  set anioNacimiento(anioNacimientoNuevo) {
    this.#anioNacimiento = anioNacimientoNuevo;
  }

  mostrarGeneracion() {
    let generacion, rasgo;
    this.anioNacimiento >= 1994
      ? ((generacion = "Generación Z"), (rasgo = "Irreverencia"))
      : this.anioNacimiento >= 1981
      ? ((generacion = "Generación Y"), (rasgo = "Frustracion"))
      : this.anioNacimiento >= 1969
      ? ((generacion = "Generación X"), (rasgo = "Obsesión por el éxito"))
      : this.anioNacimiento >= 1949
      ? ((generacion = "Baby Boomer"), (rasgo = "Ambición"))
      : this.anioNacimiento >= 1930
      ? ((generacion = "Silent Generation"), (rasgo = "Austeridad"))
      : this.anioNacimiento < 1929
      ? ((generacion = "Edad avanzada"), (rasgo = "Antiguo"))
      : false;
    console.log(generacion, rasgo, this.anioNacimiento);
    return (
      "La persona pertenece a la generación " +
      generacion +
      " y su rasgo principal es la " +
      rasgo
    );
  }
  esMayorDeEdad() {
    console.log( this.edad >= 18)
    return this.#edad >= 18
      ? "La persona es mayor de edad"
      : "La persona no es mayor de edad";
  }
  llenar(
    nombreNuevo,
    edadNuevo,
    dniNuevo,
    sexoNuevo,
    pesoNuevo,
    alturaNuevo,
    anioNacimientoNuevo
  ) {
    this.nombre = nombreNuevo;
    this.edad = edadNuevo;
    this.dni = dniNuevo;
    this.sexo = sexoNuevo;
    this.peso = pesoNuevo;
    this.altura = alturaNuevo;
    this.anioNacimiento = anioNacimientoNuevo;
  }
}

var persona1 = new Persona();

function mostrarGeneracion() {
  let mostrarTexto = document.querySelector("#resultado");
  let textoResultado = document.createElement("p");
  let generacion = persona1.mostrarGeneracion();
  textoResultado.textContent = generacion;
  mostrarTexto.innerHTML = "";
  mostrarTexto.appendChild(textoResultado);
}
function esMayor() {
  let mostrarTexto = document.querySelector("#resultado");
  let textoResultado = document.createElement("p");
  let esMayor = persona1.esMayorDeEdad();
  textoResultado.textContent = esMayor;
  mostrarTexto.innerHTML = "";
  mostrarTexto.appendChild(textoResultado);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.querySelector('input[name="Nombre"]').value;
  let edad = document.querySelector('input[name="Edad"]').value;
  let dni = document.querySelector('input[name="Dni"]').value;
  let sexo = document.querySelector('select[name="Sexo"]').value;
  let peso = document.querySelector('input[name="Peso"]').value;
  let altura = document.querySelector('input[name="Altura"]').value;
  let anioNacimiento = document.querySelector(
    'input[name="AnioNacimiento"]'
  ).value;
  persona1.llenar(nombre,edad,dni,sexo, peso, altura,anioNacimiento);
  console.log(persona1);
});
btn1.addEventListener("click", mostrarGeneracion);
btn2.addEventListener("click", esMayor);

/* # 2- Crea una clase llamada Persona que siga las siguientes condiciones:Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.Los métodos que se debe poder utilizar  son:mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.

Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
*/
