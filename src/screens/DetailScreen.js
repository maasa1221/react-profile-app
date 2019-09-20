import React from 'react';
import styled from 'styled-components';
import {mapStateToProps, mapDispatchToProps} from '../actions';
import { connect,} from 'react-redux';
import {Link} from "react-router-dom"
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'

const dateString = (date) => {
  const str = date;
  return str.split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
  }

  componentWillMount() {
    console.log(this.props.profile)
  const ProfileById = id => this.props.profile.find(profile => profile.id.toString() === id)
    const  {id}  = this.props.match.params
    const params = ProfileById(id)
    this.setState(params);
    
  }
  /*returnMemo(memo) {
    this.setState({ memo });
  }*/

  render() {
    return (
      <div >
        <div>
          <div >
            <Box>
              <p >{this.state.name}</p>
              <p >{this.state.updated_at}</p>
            </Box>
          </div>
        </div>

        <Textout>
        名前
        </Textout>
        <Textin>{this.state.name}</Textin>
        <Textout>
        性別
        </Textout>
        <Textin>{this.state.sex=="男" ? "男" : "女"}</Textin>
        <Textout>
        身長
        </Textout>
        <Textin>{this.state.height+"cm"}</Textin>
        <Textout>
        年齢
        </Textout>
        <Textin>{this.state.age+"才"}</Textin>
        <Textout>
        プロフィール画像
        </Textout>
        <Proimg src={this.state.my_photo_bool==true? `https://sapeetapp.s3-ap-northeast-1.amazonaws.com/uploads/image${this.state.id}.jpg`: tempAvatar}/>  
        <Link to = {`/edit/${this.state.id}`} >編集</Link>
      </div>
      
    );
  }
}


const Box = styled.div`
background-color: #00ccff;
padding-top: 10px;
padding-bottom: 10px;
`;

const Textout = styled.p`
  fontSize: 15px;
  margin-left: 5px;
  margin-top: 5px;
  
`;


const Textin = styled.p`
  fontSize: 15px;
  margin: 10px; 
`;

const Photo = styled.div`
  margin: 10px; 
`;

const Proimg = styled.img`
border-radius: 50%; 
width:  150px;       
height: 150px; 
`;

export default connect(mapStateToProps, mapDispatchToProps)(MemoDetailScreen)
