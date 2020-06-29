import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx);
        return { ...initalProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default CustomDocument
