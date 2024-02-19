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
