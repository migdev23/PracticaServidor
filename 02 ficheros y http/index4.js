//Poner type module en el package.json
//  "type": "module",

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

//Colores modeados
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');
console.log(error('Error!'));
console.log(warning('Warning!'));


// Maneras de imprimir colores tiza
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));