// pair programming with claire
const spinner = ['|', '/', '-','\\', '|', '/', '-', '\\', '|' ];
let count = 100;

for(const arm of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${arm}    `);    
  }, count += 200);
};
