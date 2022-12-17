const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
]

function twoDigit(x: number) {
    return `00${x}`.slice(-2)
}

export function dateFormatter(date: string): string {
    const d = new Date(date)
    const day = d.getDate()
    const month = monthNames[d.getMonth()]
    const hour = twoDigit(d.getHours())
    const minute = twoDigit(d.getMinutes())
    return `${month}${day} ${hour}:${minute} `
}