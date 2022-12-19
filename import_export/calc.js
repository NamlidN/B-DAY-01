// durch den export kann summe von anderen modulen importiert werden
export const summe = (a, b) => {
    return extra(a + b)
}


// wird nicht exportiert und kann somit nur innerhalb d es modules genutzt werden
const extra = a => {
    return a * 2
}

export const magdasGehalt = () => {
    return 9500
}

export default magdasGehalt

