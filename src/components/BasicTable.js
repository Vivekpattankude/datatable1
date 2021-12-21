import React, {Component} from 'react'
import './Basictable.css';

class BasicTable extends Component {  

    constructor(props) {
      super(props)
    
      this.state = {
         user: [],
         isLoading : true,
         isError : false

      }
    }

    async componentDidMount(){
        this.setState({isLoading:true})
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(response.ok){
          const posts = await response.json()
          console.log(posts) 
          this.setState({posts, isLoading: false})
        } else{
            this.setState ({isError:true, isLoading: false})
        }
    }
    
    renderTableHeader = () => {
        return Object.keys(this.state.posts[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
      }

      renderTableRows = () => {
        return this.state.posts.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.userID}</td>            
              <td>{user.id}</td>
              <td>{user.title}</td>            
              <td>{user.body}</td>           
            </tr>
          )
        })
      }

    render(){

        const { posts, isLoading, isError} = this.state

        if(isLoading) {
            return <div> Loading ...</div>
        }

        if(isError) {
            return <div>Error...</div>
        }

      return posts.length > 0
      ?(
         <table>
            <thead>
                <tr>
                {this.renderTableHeader()}
                </tr>
            </thead>
            <tbody>
                {this.renderTableRows()}
            </tbody>
         </table>
      ):(
          <div> No Users</div>
      )
    }
}

export default BasicTable




