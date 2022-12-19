
export const arrays = (a , b)=>{
    return a +"  "+ b;
}
export const hs = (a, b)=>{
    a.pop() 
    b.pop()
    return a +"  "+ b;

}
export const hs2 = (c, d)=>{
   
    return c.pop() +"  "+ d.pop();

}
export const hs3 = (z, y)=>{
    z.shift() 
    y.shift()
    return z +"  "+ y;

}
export const hs4 = (a, b)=> {
   

    const index = a.indexOf(b);

    for (let i = 0; i < a.length; i++) {
        if(a[i] === b){
              a.splice(a.indexOf(b), 1);
        }
  
      }
   return   a 
}
export const hs5 = (AB, BA)=>{
 let  WW = (AB - BA) * (-1)
 let  QQ = Math.floor(Math.random() * WW);
    return AB + QQ;
}
export const hs6 = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    
}
export const hs7 = (string)=>{
    return string.toUpperCase();
    
}
export const hs8 = (str, letter)=>{
    return str[str.length - 1] === letter ? true : false;
    
}




export default arrays & hs & hs2 & hs3 & hs4 & hs5 & hs6 & hs7 & hs8