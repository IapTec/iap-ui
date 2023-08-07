import React from 'react'
import Styles from './styles'

interface IAppTableProps {
    body: React.ReactNode
    header: React.ReactNode
}

export const TableRow = Styles.Row
export const DataCell = Styles.DataCell
export const HeaderCell = Styles.HeaderCell

const AppTable: React.FC<IAppTableProps> = props => {
    const { body, header } = props

    return (
        <Styles.Wrapper>
            <Styles.Table>
                <Styles.Header>{header}</Styles.Header>
                <Styles.Body>{body}</Styles.Body>
            </Styles.Table>
        </Styles.Wrapper>
    )
}

export default AppTable
