// filter
// .filter() method is used to create a new array containing only the elements that pass a condition
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4 )
/* const newNums = myNums.filter((num) => {
    num > 4}) will give empty array, return keyword likh na chahiye if you open scope*/
console.log(newNums)

/*let userBooks = books.filter((bk) => bk.genre === 'history') objects pe filter lgana ho 
 userbooks = books.filter((bk) => {
return break.publish >= 1995 && break.genre === 'history'
 }) for multiple conditions */

