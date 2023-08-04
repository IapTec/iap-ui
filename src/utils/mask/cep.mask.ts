const pattern = /^\d{5}-?\d{3}$/

const getRawValue = (value: string) => value.match(/\d+/g)?.join('')

const getFormatValue = (value: string) => {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')

    return value
}

const validation = (event: React.FormEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget
    event.currentTarget.maxLength = 9

    if (!value.match(pattern)) event.currentTarget.value = getFormatValue(value)

    return event
}

export default {
    getRawValue,
    getFormatValue,
    directive: { onKeyUp: validation }
}
