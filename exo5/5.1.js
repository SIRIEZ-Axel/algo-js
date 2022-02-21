let readlineSync = require("readline-sync");

function askTvseries() {
    let name = (readlineSync.question("Tell me what's your favorite Tv show: "));
    let production = (readlineSync.question("When did the production begin: "));
    let cast = (readlineSync.question("Give me the names of the cast members: "));
        let Tvobject = {
            "Title of tv show " : name,
            "The production year " : production,
            "Members cast " : [
                cast
            ]
        };
        return Tvobject;
}

let result = JSON.stringify(askTvseries())

console.log(result)