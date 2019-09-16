import React from 'react';
import styled from 'styled-components';

const tempAvatar = 'https://firebasestorage.googleapis.com/v0/b/novels-a5884.appspot.com/o/temp%2Ftemp.png?alt=media&token=a4d36af6-f5e8-49ad-b9c0-8b5d4d899c0d'
const Profile = (data) => {
  var list = [];
  for(var i in data){
    list.push(
      <div>
        <Proimg src={data[i].my_photo_bool==true? `https://sapeetapp.s3-ap-northeast-1.amazonaws.com/uploads/image${data[i].name}.jpg`: tempAvatar}/>  
        <p>{data[i].name}</p>
        <p>{data[i].updated_at}</p>
      </div>
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

export default ProList;
