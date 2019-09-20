import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'
const Profile = (data) => {
  var list = [];
  for(var i in data){
    list.push(
      <Probox>
        <Link to = {`/detail/${data[i].id}`} >
        <Proimg src={data[i].my_photo_bool==true? `https://sapeetapp.s3-ap-northeast-1.amazonaws.com/uploads/image${data[i].id}.jpg`: tempAvatar}/>  
        <Textname>{data[i].name}</Textname>
        <Textdate>{data[i].updated_at}</Textdate>
        </Link>
      </Probox>
    );
  }
  return(
    <ul>
      {list}
    </ul>
  );
}
class ProList extends React.Component {
  render() {
    return (
      <div >
        {Profile(this.props.proList)}
      </div>
    );
  }
}

const Proimg = styled.img`
border-radius: 50%; 
width:  150px;       
height: 150px; 
`;
const Textname = styled.p`
  font-size: 35px;
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: -100px;
`;
const Textdate = styled.p`
  fontSize: 15px;
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: -30px;
`;
const Probox = styled.div`
  margin: 10px;
  padding: 5px;
  border: solid #ddd;
`;


export default ProList;
