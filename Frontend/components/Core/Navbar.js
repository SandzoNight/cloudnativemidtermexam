import React from 'react'
import styled from 'styled-components'
import * as R from 'ramda'
import color from '../../config/colors'
import Sidebar from 'react-sidebar'
import Icon from '../Core/Icon'
import { faUser, faCalendarCheck, faUserTie } from '../../node_modules/@fortawesome/free-solid-svg-icons'
const styles = {
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    overflowX: 'hidden',
  },
  sidebar: {
    zIndex: 2,
    width: '60vw',
    position: 'fixed',
    backgroundColor: 'white',
    top: 52,
    bottom: 0,
    transition: 'right transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    transition: 'right .3s ease-out, right .3s ease-out',
  },
  overlay: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity .3s ease-out, visibility .3s ease-out',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  dragHandle: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
  },
}
const BurgerBox = styled.button`
  position: absolute;
  width: 51px;
  height: 33px;
  right: 10px;
  margin: 0.5px;
  top: 9.5px;
  cursor: pointer;
  background:transparent;
  border:0;
  border-radius: 5px;
  &:hover {
    background: #D75025;
  }
  &:focus{
    background: #D75025;
  }
`
const BurgerBar = styled.div`
  width: 21px;
  height: 3px;
  background-color: white;
  margin:auto;
  margin-top: 3px;
  margin-bottom: 3px;
  border-radius: 10px;
`
const ItemList = [
  { name: 'Profile', link: '/profile', icon: faUser },
  { name: 'Ticket', link: '/profile/ticket', icon: faCalendarCheck },
  { name: 'Organizer', link: '/organizer', icon: faUserTie },
]
const Item = [
  { name: 'Logout', link: '/logout', icon: '' },
]
const ItemBox = styled.div`
  font-size: 18px;
  height: 76px;
  border: 1px solid #E4E4E4;
  padding-left: 28px;
  vertical-align: middle;
  line-height: 76px;
  color: ${color.mainOrange};
`
const ItemNotBox = styled(ItemBox)`
  border: 0px solid #E4E4E4;
`
const IconItem = styled(Icon)`
  height: 27px;
`
const Logo = styled.img`
  height: 28px;
  margin-top: 12px;
  margin-left: 13px;
  cursor:pointer;
`
const MenuBar = (props) => (
  <div>
    {ItemList.map((e, i) => (
      <a key={i} href={e.link}>
        <ItemBox><IconItem icon={e.icon} />{e.name}</ItemBox>
      </a>
    ))}
    {props.user ? !R.find(R.propEq('provider_name', 'KMUTT Account'))(props.user.accounts) ? (
      <a href='/profile/connect/kmutt'>
        <ItemNotBox>Verify Account</ItemNotBox>
      </a>
    ) : '' : ''}
    {/* {props.user ? !R.find(R.propEq('provider_name', 'Facebook Account'))(props.user.accounts) ? (
      <a href='/profile/connect/kmutt'>
        <ItemNotBox>Connect Facebook</ItemNotBox>
      </a>) : '' : ''
    } */}
    {Item.map((e, i) => (
      <a key={i} href={e.link}>
        <ItemNotBox>{e.name}</ItemNotBox>
      </a>
    ))}
  </div>
)
const Bar = styled.div`
  z-index: 2;
  width: 100%;
  height: 52px;
  background-color: ${color.navbarNormal};
  position: fixed;

`

const Link = styled.a`
  font-family: Roboto;
  float: right;
  margin: 17px 8px 0 0;
  font-size: 15px;
  text-decoration-line: underline;
  color: #FFFBFC;
  &:link {
    text-decoration-line: underline;
    color: #FFFBFC;
  }
  &:hover {
    color: #FFFBFC;
    text-decoration-line: none;
  }
`
const Content = styled.div`
  margin-top: 52px;
`
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarOpen: false,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen () {
    if (this.state.sidebarOpen === false) {
      this.setState({ sidebarOpen: true })
    } else {
      this.setState({ sidebarOpen: false })
    }
  }

  render () {
    return (
      <Sidebar
        sidebar={this.props.user ? <MenuBar user={this.props.user} /> : <></>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={styles}
        pullRight
        touch={!this.props.user === false}
      >
        {this.props.user
          ? <Bar>
            <a href='/'>SIT-ECR</a>
            <BurgerBox onClick={() => this.onSetSidebarOpen()}>
              <BurgerBar />
              <BurgerBar />
              <BurgerBar />
            </BurgerBox>
          </Bar>
          : <Bar>
            <a href='/'><Logo src='/static/img/logo.png' /></a>
            <Link href='/login'>SIGN IN</Link>
          </Bar>
        }
        <Content>
          {this.props.content}
        </Content>
      </Sidebar>
    )
  }
}

export default App
