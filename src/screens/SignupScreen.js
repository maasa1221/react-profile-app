import React from 'react';
import { registerUser }from '../config/redux-token-auth-config'
import { connect,} from 'react-redux';
import {Link} from "react-router-dom"

const initial_state = {
  email: 'maasa0126@gmail.com',
  password: '12211221mw',
}
class SignupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = initial_state
  }
  handleSubmit=event => {
    event.preventDefault()
    const { registerUser} = this.props
      const { email, password } = this.state
      registerUser({ email, password })
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
        メンバー登録
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
        <button onClick={this.handleSubmit.bind(this)} underlayColor="#C70F66">
          <Link to="">登録する</Link>
        </button>
        <button>
          <Link to="/">ログインする</Link>
        </button>
        
      </div>
    );
  }
}

export default connect(null,{ registerUser })(SignupScreen)
