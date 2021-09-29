type ValueType = {
    value: string | number
    length: number
}

export const required = (value: ValueType) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: ValueType) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
