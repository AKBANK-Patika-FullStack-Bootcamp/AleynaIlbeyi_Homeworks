const array =[2,3,4];
//high order func
const girlsPowerToplami = (x) => {
    return (x/2)+3;
}
const girlsPowerFunc = (arr) => {
     return arr.map(girlsPowerToplami);
    };
    
console.log(`[${array}] -> [${girlsPowerFunc(array)}]`);