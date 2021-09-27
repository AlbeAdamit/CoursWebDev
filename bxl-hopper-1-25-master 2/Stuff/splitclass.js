const { hoppers } = require('./lateam.js')

const initEmptyArray = (len, val=0) => Array.apply(val, Array(len))

Array.prototype.splitInGroupOf = function(groupSize){
  const shuffled = this.sort(() => Math.random() - .5)
  const numGroups = shuffled.length / groupSize

  if(!Number.isInteger(numGroups))
    throw new Error("Cannot split array in even groups")

  return initEmptyArray(numGroups).map((x, i) => (
    shuffled.slice(i * groupSize, i * groupSize + groupSize)
  ))
}

if(process.argv.length !== 3){
  console.error('No arguments')
  console.log('Usage node splitclass.js [group_size]')
  process.exit(0)
}

console.log(
  hoppers.splitInGroupOf(parseInt(process.argv[2]))
)