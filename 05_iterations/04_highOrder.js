const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
}

for (const key in myObject) {
    console.log(`${key} for ${myObject[key]}`);
    
}

const prog = [ "java", " python", "Javascript"]
for (const key in prog) {
    console.log(prog[key]);
}
// for in me humesha key hi dega
// map iterartaable nahi hai using for in

