process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
 if (key === '\u0003') {
 
 process.exit();
 } else {
 
 console.log('click event captured!');
 
 }
 });
 
 console.log('Listening for click events. Press Ctrl+C to exit.');
