import { format } from 'date-fns'
import { Timestamp } from 'firebase/firestore'

export const getFormatedDate = (value: Timestamp) => {
    return format(value.toDate(), 'dd/MM/yyyy')
}
