export const addSpaceBeforeCapital = (object) => {
    return Object.keys(object).map((i) => {
        return i.replace(/([A-Z])/g, " $1").trim();
    });
}