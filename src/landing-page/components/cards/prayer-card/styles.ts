import styled from 'styled-components'
import tw from 'twin.macro'

const Card = styled.article`
    ${tw`p-6 rounded-2xl flex flex-col shadow-lg min-h-[340px]`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Title = styled.h5`
    ${tw`font-semibold`}
    color: ${({ theme }) => theme.colors.primary};
`

const Text = styled.p`
    ${tw`my-4`}
`

const Footer = styled.section`
    ${tw`mt-auto flex items-center gap-2`}
`

const View = styled.div``

const Figure = styled.figure`
    ${tw`w-12 h-12 rounded-full flex items-center justify-center text-lg`}
    background: ${({ theme }) => theme.colors.primary};
`

const AuthorName = styled.h5`
    ${tw`mb-0 leading-none`}
`

const Small = styled.small``

export default {
    Card,
    View,
    Title,
    Text,
    Footer,
    Figure,
    AuthorName,
    Small
}
