1.........................................
//templates literals:
let word1="rohan bhurga";
let word2="is a very good boy"; 
//its a traditional approach
//console.log(word1+" "+word2);
//now lets try with template literal
console.log(`${word1}  ${word2}`);

2.........................................
. //destructuring objects:
const player=
{
 name :"nitesh lodha",
 club :"backbenchers",
 address :{city:"indore"}
};
/*its a traditional approach
console.log(player.name);
console.log(player.club);
console.log(player.address.city);
*/
//now lets try object destructuring
const {name,club,address}=player;
console.log( `${name} playes for ${club}`);

3..........................................
//destructuring arrays:
const player=
[
 "nitesh lodha","backbenchers","indore"
]
/*its a traditional approach
console.log(player[0]);
console.log(player[1]);
console.log(player[2]);
*/
//now lets try array destructuring
const [name,club,address]=player;
console.log( `${name} playes for ${club} in ${address}`);

4.........................................................
//object literals:
function player(name,game)

{ const newid={
    newname:name,
  newgame:game};
console.log(newid);
}
player("sapan","football");

5.......................................................