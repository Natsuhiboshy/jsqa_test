// src/util/console.js

(function augmentConsole() {
    const consoleUpdate = {
        h1: arg => console.log(`\n\n=== ${arg} ===`),
        h2: arg => console.log(`\n\n== ${arg} ==`),
        h3: arg => console.log(`\n\n= ${arg} =`),
        s: () => console.log('--------------------------------------')
    };
    Object.assign(console, consoleUpdate);
})();