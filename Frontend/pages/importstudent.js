import request from '../tools/api/request'

class IndexPage extends React.Component {
  static async getInitialProps () {
    // let students = require('./students.json')
    // for(let i=0; i<students.length; i++) {
    //   let object = {
    //     ...students[i]
    //   }
    //   // let {data} = await request.post('/students', object)
    //   console.log(data)
    // }
  }

  render () {
    return (
      <div className='container'>
       
      </div>
    )
  }
}

export default IndexPage
