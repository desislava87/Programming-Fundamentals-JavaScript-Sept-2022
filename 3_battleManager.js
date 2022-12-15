function battleManager(input) {
    let people = {};
    let line = input.shift();

    while(line !== 'Results') {

        let [command, firstPar, secondPar, thithPar] = line.split(':');

        switch (command) {
            case 'Add':
                if (!people.hasOwnProperty(firstPar)) {
                    people[firstPar] = {
                        health: Number(secondPar),
                        energy: Number(thithPar)
                    }
                } else {
                    people[firstPar].health += Number(secondPar);
                }
                break;

            case 'Attack':
                if (people.hasOwnProperty(firstPar) && people.hasOwnProperty(secondPar)) {
                    people[secondPar].health -= Number(thithPar);
                    people[firstPar].energy -= 1;

                    if(people[secondPar].health <= 0) {
                        console.log(`${secondPar} was disqualified!`);
                        delete people[secondPar];
                    } 

                    if(people[firstPar].energy <= 0) {
                        console.log(`${firstPar} was disqualified!`);
                        delete people[firstPar];
                    } 
                } 
                break;

            case 'Delete':
                if (firstPar === 'All') {
                    people = {};
                } else {
                    delete people[firstPar];
                }
                break;
        }
        line = input.shift();
    }

    let count = Object.keys(people).length;
    console.log(`People count: ${count}`);
    for (const p in people) {
        console.log(`${p} - ${people[p].health} - ${people[p].energy}`);
    }
}

// battleManager(["Add:Mark:1000:5",
// "Add:Clark:1000:2",
// "Attack:Clark:Mark:500",
// "Attack:Clark:Mark:800",
// "Add:Charlie:4000:10",
// "Results"])


// battleManager(["Add:Bonnie:3000:5",
// "Add:Kent:10000:10",
// "Add:Johny:4000:10",
// "Attack:Johny:Bonnie:400",
// "Add:Johny:3000:5",
// "Add:Peter:7000:1",
// "Delete:Kent",
// "Results"])


battleManager(["Add:Bonnie:3000:5",
"Add:Johny:4000:10",
"Delete:All",
"Add:Bonnie:3333:3",
"Add:Aleks:1000:70",
"Add:Tom:4000:1",
"Results"])
