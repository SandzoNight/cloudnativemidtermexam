import App, { Container } from 'next/app'
import Error from 'next/error'
import React from 'react'
import withReduxStore from '../redux/with-redux-store'
import { Provider } from 'react-redux'
import styled from 'styled-components'


import Navbar from '../components/Core/Navbar'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    // console.log(`rendering ${this.props.router.route}`)
    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <Navbar user={this.props.user} content={<Component user={this.props.user} {...pageProps}  />} />
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
