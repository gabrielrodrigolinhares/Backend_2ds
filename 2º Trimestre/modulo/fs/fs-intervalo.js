// setTimeout(ms) - executa 1 vez
setTimeout(function(){
    console.log('Executou timeout...');
}, 3000);

// setInterval(ms) - executa 'x' vezes
setInterval(function(){
    let n = 1;
    console.log('Executou FPS $(n)');
    n = n+1;
}, 2000);
