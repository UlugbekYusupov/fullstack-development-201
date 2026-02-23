const readline = require("node:readline/promises")
const { stdin: input, stdout: output } = require("node:process")

const rl = readline.createInterface({ input, output })

async function main() {
  const n = await rl.question("Son kiriting: ")
  console.log(Number(n) + 1)
  rl.close()
}

main()