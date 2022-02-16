


fetch("https://raider.io/api/v1/characters/profile?region=eu&realm=la%20croisade%20%C3%A9carlate&name=olays&fields=mythic_plus_scores")
.then (function (resp){
    return resp.json();
})

.then(function(data) {
    console.log(data)
    var scoreTank = data.mythic_plus_scores.tank
    var scoreDps =  data.mythic_plus_scores.dps
    console.log(scoreTank, scoreDps)

})

console.log(encodeURI('la croisade écarlate'));
