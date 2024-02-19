// Crea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola.

// for (let j = 0; j < );

// Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas y números. Por parámetros se indicara la longitud, con un minimum de 6 caracteres.
const randomPassword = (passLength) => {
  if (passLength < 6) {
    return 'Password must be at least 6 characters';
  }

  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let password = '';

  for (let i = 0; i < passLength; i++) {
    let getLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    let getUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
    let getNumber = numbers[Math.floor(Math.random() * numbers.length)];

    password += getLowerCase + getUpperCase + getNumber;
  }

  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  password = password.slice(0, passLength);

  return password;
};

console.log(randomPassword(8));
// Crea una función que filtre un array de nombres y devuelva solo los nombres con menos de cierta longitud.

// Crea una función que sume todos los números de un array y devuelva también la media, mediana, moda y la suma total.

// Crea una función que cuente la cantidad de palabras en una frase.

// Crea una función que ordene un array de nombres alfabéticamente.

// Generador de números pares e impares: Escribe una función que tome un número como argumento y genere dos arrays, uno con los números pares hasta ese número y otro con los números impares hasta ese número.

// Crea una función que reciba un texto en kebab-case y devuelva el texto escrito en camelCase. La función debe realizar las siguientes comprobaciones sobre el texto recibido:

// Si tiene alguna mayúscula, debe devolver "The text contains capital letters"
// Si tiene algún guion bajo, debe devolver "The text contains underscores"
// Si el texto está vacío, debe devolver "You must provide some text"
// Desafíos adicionales
// Crea una función que reciba un texto en camelCase y devuelva el texto escrito en kebab-case, en snake_case, en camelCase y en PascalCase...

// Crea una función que reciba un texto y devuelva el mismo texto con todas las vocales acentuadas reemplazadas por vocales sin acentuar y todas las vocales sin acentuar reemplazadas por vocales acentuadas.

// Crea una función que reciba un texto y devuelva el mismo texto con todas las letras en mayúsculas y todas las letras en minúsculas intercambiadas.
