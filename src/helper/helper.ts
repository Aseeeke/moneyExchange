
export function isNumeric(str: string) {
    return str.trim() !== "" && !isNaN(parseFloat(str));
}