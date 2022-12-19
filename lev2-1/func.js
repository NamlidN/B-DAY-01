 export const einwohner = (cities) =>{

    return cities.filter(city => city.population > 100000);
 }
 export const einwohner2 = (cities) =>{

    return cities.filter(city => city.population < 100000);
 }
 export default einwohner