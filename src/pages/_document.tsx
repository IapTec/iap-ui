import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
} from 'next/document'
import React, { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { ComponentsEnhancer } from 'next/dist/shared/lib/utils'
import enviroments from '@/config/enviroments'

type ContextType = DocumentContext
type InitalPropsType = DocumentInitialProps

export default class MyDocument extends Document {
    static async getInitialProps(ctx: ContextType): Promise<InitalPropsType> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => {
                const config: ComponentsEnhancer = {
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                }

                return originalRenderPage(config)
            }

            const initialProps = await Document.getInitialProps(ctx)

            const styles = (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ) as ReactElement | any

            return { ...initialProps, styles }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
                        rel="stylesheet"
                    />

                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${enviroments.analytics_id}`}
                    ></script>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${enviroments.analytics_id}');`
                        }}
                    ></script>

                    <link rel="shortcut icon" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
