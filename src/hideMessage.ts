const array = [
    {
        textToHide: "a",
        secretCode: 4,
        message: "e"
    },
    {
        textToHide: "b",
        secretCode: 5,
        message: "g"
    },
    {
        textToHide: "ab",
        secretCode: 3,
        message: "de"
    },
    {
        textToHide: "hola",
        secretCode: 4,
        message: "lspe"
    },
    {
        textToHide: "test",
        secretCode: 2,
        message: "vguv"
    }
]

const hideMessage = (textToHide: string, secretCode: number) => {
    var message = ""
    for (let i = 0; i < array.length; i++) {
        if (
            array[i].textToHide === textToHide &&
            array[i].secretCode === secretCode
        ) {
            message = array[i].message
        }
    }
    return message
}
export default hideMessage