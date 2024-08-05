const marvel_Heroes =['Thor', 'Hulk', 'Black Panther' ]
const dc_Heroes = ['Flash', 'Batman', 'Superman']

const all_Heroes =marvel_Heroes.concat(dc_Heroes)

console.log(all_Heroes);


const all_Hero=[...marvel_Heroes, ...dc_Heroes]

console.log(all_Hero);



