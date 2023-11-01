/**
 * The `dateParser` function takes a string representing a date and returns a formatted date string in
 * the format "MM/DD/YYYY".
 * @param {string} string - The `string` parameter is the input date string that you want to parse and
 * format. It should be a valid date string in a format that can be recognized by the `Date`
 * constructor, such as "YYYY-MM-DD" or "MM/DD/YYYY".
 * @returns a formatted date string in the format "MM/DD/YYYY".
 */
function dateParser(string: string) {
    let newDate = new Date(string).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return newDate;
}

/**
 * The function `minMaxDate` calculates a new date by adding or subtracting a specified number of years
 * from the current date.
 * @param {number} yearNum - The `yearNum` parameter is a number that represents the number of years to
 * add or subtract from the current year.
 * @param {string} type - The `type` parameter is a string that determines whether to add or subtract
 * the `yearNum` from the current year. It can have two possible values: "add" or "subtract".
 * @returns a string representation of a date.
 */
function minMaxDate(yearNum: number, type: string) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    let newYear: number;

    if (type === "add") {
        newYear = year + (yearNum || 0);
    } else if (type === "substract") {
        newYear = year - (yearNum || 0);
    } else {
        throw new Error("Invalid type");
    }
    let date = new Date(newYear, month, day).toDateString();
    
    return date;
}

/**
 * The function converts a local date to UTC format.
 * @param {any} date - The `date` parameter is the local date that you want to convert to UTC. It can
 * be a string representing a date, a number representing the number of milliseconds since January 1,
 * 1970, or a `Date` object.
 * @returns a string representation of the UTC date in the format "ddd MMM dd yyyy".
 */
function convertLocalDateInUTC(date: any) {
    const localeDate = new Date(date);
    const day = localeDate.getDate() + 1;
    const month = localeDate.getMonth();
    const year = localeDate.getFullYear();
    let UTCDate = new Date(year, month, day).toDateString();
    return UTCDate;
}

export { dateParser, minMaxDate, convertLocalDateInUTC };
