import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import color from '../config/colors'
import api from '../tools/api/request'

const PageHeadTitle = styled.div`
  font-family: Kanit, Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: ${color.mainOrange};
  text-align: center;
  margin-top: 17px;
`

const PageHeadSubtitle = styled.div`
  font-family: Kanit, Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: #333333;
  text-align: center;
  margin-bottom: 21px;
`

class IndexPage extends React.Component {
  static async getInitialProps () {
    try {
      const {data: courses} = await api.get('http://localhost:8081'+'/enrolls')
      return { courses }
    } catch (err) {
      return { courses: [] }
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <PageHeadTitle>KMUTT EVENTS</PageHeadTitle>
            <PageHeadSubtitle>"รวมกิจกรรมเด็ด ที่เด็กบางมดไม่ควรพลาด!!"</PageHeadSubtitle>
          </div>
        </div>
        <div className='row'>
          {
            courses.map((course) => {
              return (
                <div>{course.name}</div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  allEvent: PropTypes.array,
}
export default IndexPage
