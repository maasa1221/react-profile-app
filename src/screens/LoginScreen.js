import React from 'react';
import { signInUser } from '../config/redux-token-auth-config'
import { connect,} from 'react-redux';
import {Link} from "react-router-dom"

class LoginScreen extends React.Component {
  state = {
    email: 'maasa0126@gmail.com',
    password: '12211221mw',
  }

  handleSubmit=event => {
    event.preventDefault()
    const {signInUser} = this.props
    const { email, password } = this.state
    signInUser ({email, password}) 
  }

  changeMail(e){
    this.setState({email: e.target.value})
  }
  changePass(e){
    this.setState({password: e.target.value})
  }


  render() {
    return (
      <div >
        <h1 >
        ログイン
        </h1>
        <input
          type="email"
          value={this.state.email}
          onChange={this.changeMail.bind(this)} 
          placeholder="Email Address"
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.changePass.bind(this)}
          placeholder="Password"
        />
        <button  onClick={this.handleSubmit.bind(this)}>
        <Link to="/home">ログインする</Link>
        </button>

        <button>
          <Link to="/signup">メンバー登録する</Link>
        </button>
      </div>
    );
  }
}




export default connect(null,{ signInUser })(LoginScreen)