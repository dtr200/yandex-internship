module.exports = function (explorers) {  
    const places = {}
    explorers.forEach(el => {
        for(let i = 1; i < el.length; i++){
            places[el[i]] = [];
        }
    })
    explorers.forEach(el => {
        for(let i = 1; i < el.length; i++){
            places[el[i]].push(el[0])
        }
    })
    const res = [];
    for(let i in places){
        const arr = [];
        arr.push(i);        
        res.push(arr.concat(places[i]))
    }
    return res
};