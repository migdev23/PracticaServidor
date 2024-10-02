var colors = require("colors");

colors.setTheme({
  colorRenombrado: "rainbow",
  custom: ["red", "underline"],
});

console.log('hello'.green); 
console.log('i like cake and pies'.underline.red) 
console.log('inverse the color'.inverse); 
console.log('OMG Rainbows!'.rainbow);
console.log('Run the trap'.trap); 
console.log('Modeado'.custom);
console.log('Modeado'.colorRenombrado);
