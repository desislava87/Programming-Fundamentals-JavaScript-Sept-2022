function wordDeveloping(input) {
    let string = '';
    let line = input.shift();

    while(line !== 'End') {
        let [command, firstPar] = line.split(' ');

        switch(command) {
            case 'Add':
                string = string.concat(firstPar);
                break;

            case 'Upgrade':
            let index = Number(firstPar.codePointAt(0));
            let newIndex = index + 1;
            let asciiSymbol =  String.fromCharCode(newIndex);
                while(string.includes(firstPar)) {
                    string = string.replace(firstPar, asciiSymbol);
                }
                break;

            case 'Print':
                console.log(string);
                break;

            case 'Index':
                if (string.includes(firstPar)) {
                    let indexArr = [];

                    for (let i = 0; i < string.length; i++) {
                        if (string[i] === firstPar) {
                            indexArr.push(i);
                        }
                    }
                    console.log(indexArr.join(' '));

                } else {
                    console.log('None');
                }
                break;

            case 'Remove':
                while(string.includes(firstPar)) {
                    let startIndex = string.indexOf(firstPar);
                    let endIndex = Number(startIndex) + Number(firstPar.length);
                    let firstPart = string.substring(0, startIndex);
                    let secondPart = string.substring(endIndex);
                    string = firstPart + secondPart;
                }
                break;
        }

        line = input.shift();
    }
}

// wordDeveloping(["Add University",
// "Print",
// "Upgrade n",
// "Print",
// "Index i",
// "Remove sity",
// "Print",
// "End"])


wordDeveloping(["Add HelloWorld",
"Upgrade e",
"Print",
"Index b",
"Remove rl",
"Print",
"End"])
