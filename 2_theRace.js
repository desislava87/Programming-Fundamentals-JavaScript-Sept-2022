function theRace(input) {
    let line = input.shift();
    let pattern = /^([#$%*&])(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<encryptedCode>.+)$/g;

    while (input !== 0) {
        // let message = pattern.test(line);
        let arg = line.match(pattern);

        // console.log(message);
        if (arg === null) {
            console.log('Nothing found!');
        } else {
            // let arr = line.match(pattern);
            let msg = pattern.exec(line);
            let digit = Number(msg[3]);
            let decryptMsg = msg[4]
            if (digit === decryptMsg.length) {
                let newMsg = [];
                for (let i = 0; i < decryptMsg.length; i++) {
                    let index = Number(decryptMsg.codePointAt(i));
                    let newIndex = index + digit;
                    let asciiSymbol =  String.fromCharCode(newIndex);
                    newMsg.push(asciiSymbol);
                    
                }
                console.log(`Coordinates found! ${msg[2]} -> ${newMsg.join('')}`);
                break;
            } else {
                console.log('Nothing found!');
            }
        }
        line = input.shift();
    }
}

// theRace((["%GiacomoAgostini%=7!!hbqw",
// "&GeoffDuke*=6!!vjh]zi",
// "JoeyDunlop=10!!lkd,rwazdr",
// "Mike??Hailwood=5!![pliu",
// "#SteveHislop#=16!!df%TU[Tj(h!!TT[S"])
// )

theRace(["Ian6Hutchinson=7!!\(58ycb4",
"#MikeHailwood#!!'gfzxgu6768=11",
"slop%16!!plkdek/.8x11ddkc",
"$Steve$=9Hhffjh",
"*DavMolyneux*=15!!efgk#'_$&UYV%h%",
"RichardQ^uayle=16!!fr5de5kd"])
