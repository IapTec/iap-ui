import { scrollBar } from '@/styles/ts/mixins/scroll-bar.mixin'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section`
    ${tw`flex`}
`

const Aside = styled.aside`
    ${scrollBar('2px')}
    ${tw`w-72 max-h-[98vh] overflow-y-auto sticky top-0`}
`

const Main = styled.main`
    ${tw`w-full`}
`

export default { Container, Main, Aside }
