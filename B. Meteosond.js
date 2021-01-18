module.exports = function (diffs) { 
    const dx = diffs.map(el => el[0])
    const dy = diffs.map(el => el[1]);
    const fin = diffs;

    function sum(coords){
        return coords.reduce((accum, el) => accum + el)
    }
    
    if(sum(dx) % 2 == 0 && sum(dy) % 2 == 0){
        let combX = sum(dx)/2;
        let combY = sum(dy)/2;
        for(let i = 0; i < fin.length; i++){
            if(fin[i][0] !== 0 && combX !== 0){                
                fin[i][0] *= -1;
                combX--;
            }
            if(fin[i][1] !== 0 && combY !== 0){
                fin[i][1] *= -1;
                combY--;
            }
        }
        return fin
    }
    else 
        return null
};