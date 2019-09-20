import React from 'react';
import { connect,} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../actions';
import {Link} from "react-router-dom"
import styled from 'styled-components';
var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

class MemoCreateScreen extends React.Component {
  state = {
    my_photo_bool: 0,
  }
  radio_props = [
    {label: '男', value: 0 },
    {label: '女', value: 1 }
  ];
  file = {
    uri: this.state.my_photo,
    name: `image${this.state.id}.jpg`,
    type: "image/jpeg"
  }
  pickImage = (e) => { 
    var image_url = createObjectURL(e.target.files[0]);
    this.setState({ my_photo: image_url ,my_photo_bool: 1})
    console.log(Object.keys(this.props.profile).length+1)
    this.props.postPhoto({
      uri: e.target.files[0],
      name: `image${Object.keys(this.props.profile).length+1}.jpg`,
      type: e.target.files[0].type
    });
    
  }
  handlePress() {
      this.props.postProfile(this.state);

      //this.props.navigation.goBack()
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
          placeholder="名前"
          onChange={(text) => { this.setState({ name: text.target.value }); }}
         />
        <p >
        性別
        </p>
        <p>
          <input type="radio" name="gender" value = "男" onChange={(text) => { this.setState({ sex: text.target.value }); }}/> 男
          <input type="radio" name="gender"  value="女" onChange={(text) => { this.setState({ sex: text.target.value }); }}/> 女
        </p>
        <p >
        身長
        </p>
        <input
          value={this.state.height}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="例:170"
          onChange={(integer) => { this.setState({ height: integer.target.value }); }}
        />
        <p >
        年齢
        </p>
        <input
          value={this.state.age}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="例:22"
          onChange={(integer) => { this.setState({ age: integer.target.value }); }}
        />
        <p >
        プロフィール画像
        </p>
        <Proimg src={this.state.my_photo_bool==true?this.state.my_photo: tempAvatar}/>  
        <input 
          type="file"
          id="avatar" 
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={this.pickImage}
       />
       
       <button name="check" onClick={this.handlePress.bind(this)}>
       <Link to={`/home`}>作成</Link>
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


export default connect(mapStateToProps, mapDispatchToProps)(MemoCreateScreen)
