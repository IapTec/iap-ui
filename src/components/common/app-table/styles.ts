import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled.article`
    ${tw`overflow-x-auto w-full rounded-lg shadow-sm`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Table = styled.table`
    ${tw`w-full`}

    th, td {
        ${tw`py-4 text-left`}

        &:first-of-type {
            ${tw`pl-4`}
        }
        &:last-of-type {
            ${tw`pr-4`}
        }
    }
`

const Header = styled.thead``

const Body = styled.tbody`
    tr {
        border-top: 1px solid ${({ theme }) => theme.colors.gray_light};
    }
`

const Footer = styled.tfoot``

const Row = styled.tr``

const DataCell = styled.td`
    ${tw`sm:min-w-[125px]`}
`

const HeaderCell = styled.th`
    background: ${({ theme }) => theme.colors.gray_light};
`

export default {
    Row,
    Body,
    Table,
    Header,
    Footer,
    Wrapper,
    DataCell,
    HeaderCell
}
