import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import ENV from '../config/env'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>SIT-ECR</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta name='theme-color' content='#4F4F4F ' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='shortcut icon' type='image/png' href='/static/img/favicon.png' />
          <link rel='stylesheet' href='/static/css/sweetalert2.css' />
          <link rel='stylesheet' href='/static/css/bootstrap.css' />
          <link href='https://fonts.googleapis.com/css?family=Kanit' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,900' rel='stylesheet' />
          <link href='https://use.fontawesome.com/releases/v5.2.0/css/svg-with-js.css' rel='stylesheet' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
