export function add(a, b){
    if(!a || !b) return -1;
    if(isNaN(a) || isNaN(b)) throw Error("Attribute is not a number");
    return a+b;
}