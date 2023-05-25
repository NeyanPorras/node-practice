// crear json manual en el root O
// npm init (paso a paso, enter para skipear)
// npm init -y (todo defualt, shortcut)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
