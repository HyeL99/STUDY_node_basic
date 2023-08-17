const fs = require('fs');   // 코어모듈 - 파일시스템(FileSystem)
const os = require('os');   // 코어모듈 - 운영체제(OperatingSystem)

// let fileList = fs.readdirSync('.');
// console.log(fileList)

fs.writeFileSync('new.txt', 'Hello Node.js!!');
console.log(os.cpus());