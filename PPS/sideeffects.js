const fs = require("fs")
const exec = require('child_process').exec;

// adjust as needed
const finalA = 0;
const finalB = [5, 1, 6, 3]

const minValue = -10;
const maxValue = 10;

// input the statements from the task
const sideEffects = `
b[b[a-4]-=1]=a;
b[b[a-4]-4]+=b[--b[0]]++;
--b[a=(a-=a)];
`



















function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

const main = () => {
    const forLoopCount = finalB.length + 1;

    generateCode(forLoopCount)
}



const generateCode = (forLoopCount) => {
    const code = []
    code.push(`let a;`)
    code.push(`let b = []`)
    code.push(`const finalA = ${finalA}`)
    code.push(`const finalB = [${finalB.toString()}]`)
    code.push(arrayEquals.toString())
    for (let i = 0; i < forLoopCount; i++) {
        code.push(generateForLoop(i))
        if (i === forLoopCount - 1) {
            generateAllocation(code, forLoopCount)
            code.push(sideEffects)
            generateTestCase(code, forLoopCount)
        }
    }
    code.push("}".repeat(forLoopCount))
    code.push(`console.log("done")`)

    fs.writeFileSync("test.js", code.join("\n"))
}

const generateTestCase = (code, forLoopCount) => {
    code.push("if (a === finalA && arrayEquals(b, finalB)) {");
    code.push(`console.log("a: ", idx0)`);
    code.push(`console.log("b: ", [`)
    for (let i = 1; i < forLoopCount; i++) {
        i + 1 === forLoopCount ? code.push(`idx${i}`) : code.push(`idx${i},`)
    }
    code.push(`])`)
    code.push(`console.log("the resulting b:", b)`)
    code.push(`console.log()`)
    code.push("}")
}

const generateAllocation = (code, forLoopCount) => {
    code.push("a = idx0")
    code.push(`b = [`)
    for (let i = 1; i < forLoopCount; i++) {
        i + 1 === forLoopCount ? code.push(`idx${i}`) : code.push(`idx${i},`)
    }
    code.push("]")
}

const generateForLoop = (count) => {
    return `for (let idx${count} = ${minValue}; idx${count} <= ${maxValue}; idx${count}++) {`
}

main()

exec('node test.js', function (error, stdout, stderr) {
    console.log(stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });