import _ from 'lodash'

export default function solution(content){
  // BEGIN
const papka = content.split('\n')
const dell = papka.slice(1, papka.length-1);
console.log(dell.length);


const code = dell.map((r) => r.split(','));
const city = code.map((r) => r[7]); 
const unik = _.uniq(city);
const mokro = code.map((r) => r[3]);
console.log(unik.sort());
const max = _.max(mokro);
const min = _.min(mokro)
console.log(`Humidity: Min: ${min}, Max: ${max}`);
 // END

}