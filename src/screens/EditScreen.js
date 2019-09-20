import React from 'react';
//import * as ImagePicker from 'expo-image-picker';
//import * as Permissions from 'expo-permissions';
import { connect,} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../actions';
import styled from 'styled-components';
import {Link} from "react-router-dom"
var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

class MemoEditScreen extends React.Component {
  state = {
  }
  file = {
    uri: this.state.my_photo,
    name: `image${this.state.id}.jpg`,
    type: "image/jpeg"
  }

  componentWillMount() {
    const ProfileById = id => this.props.profile.find(profile => profile.id.toString() === id)
    const  {id}  = this.props.match.params
    const params = ProfileById(id)
    this.setState(params);
    }
  componentDidMount(){
    this.setState({my_photo: `https://sapeetapp.s3-ap-northeast-1.amazonaws.com/uploads/image${this.state.id}.jpg`})
  }
  pickImage = (e) => { 
    var image_url = createObjectURL(e.target.files[0]);
    this.setState({ my_photo: image_url ,my_photo_bool: 1})
    this.props.postPhoto({
      uri: e.target.files[0],
      name: `image${this.state.id}.jpg`,
      type: e.target.files[0].type
    });
    
  }
  handlePress() {
    this.props.putProfile(this.state,this.state.id)
    this.setState(this.state)
    console.log(this.state)
    window.location.reload()
  }

  
  render() {
    return (
      <div >
        <p >
        名前
        </p>
        <input
          value={this.state.name}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={(text) => { this.setState({ name: text.target.value}); }}
        />
        <p >
        性別
        </p>
        <p>
        <input type="radio" name="gender" checked={this.state.sex == "男" } value="男" onChange={(text) => { this.setState({ sex: text.target.value }); }}/> 男
        <input type="radio" name="gender" checked={this.state.sex == "女" } value="女" onChange={(text) => { this.setState({ sex: text.target.value }); }}/> 女</p>
        <p >
        身長
        </p>
        <input
          type="number"
          value={this.state.height}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={(text) => { this.setState({ height: text.target.value }); }}
        />
        <p >
        年齢
        </p>
        <input
          type="number"
          value={this.state.age}
          autoCapitalize="none"
          autoCorrect={false}
          onChange={(text) => { this.setState({ age: text.target.value }); }}
        />
        <p >
        プロフィール画像
        </p>
        <Proimg src={this.state.my_photo_bool==true? `https://sapeetapp.s3-ap-northeast-1.amazonaws.com/uploads/image${this.state.id}.jpg`: tempAvatar}/>  
        
        <input 
          type="file"
          id="avatar" 
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={this.pickImage}
       />
        <button name="check" onClick={this.handlePress.bind(this)}>
        <Link to={`/home`}>更新</Link>
        </button>
      
      </div>
    );
  }
}


const Proimg = styled.img`
border-radius: 50%; 
width:  150px;       
height: 150px; 
`;

export default connect(mapStateToProps, mapDispatchToProps)(MemoEditScreen)
