export const initFields = (fieldSize) => {
    const fields = []
    for (let i = 0; i < fieldSize; i++) {
        const cols = new Array(fieldSize).fill('')
        fields.push(cols)

    }

    return fields
}