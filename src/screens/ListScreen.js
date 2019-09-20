import React from 'react';
import ProList from '../components/ProList';
import {Link} from "react-router-dom"
import styled from 'styled-components';
import { connect,} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../actions';

class ListScreen extends React.Component {
  state={
    refreshing: false,
  }
  componentWillMount(){
    this.props.getProfile()
  }

  render() {
    return (
        <div  >
          <Box>
            <Title>プロフィール管理</Title>
            <Box2>
            <Link to = {`/create`} proList={this.props.profile}>新規作成</Link>
            </Box2>
          </Box>
          <ProList proList={this.props.profile}/>
        </div>
        
    );
  }
}

const Title = styled.p`
  fontSize: 15px;
  text-align: center;
`;
const Box = styled.div`
margin: 10px;
padding: 5px;
`;
const Box2 = styled.div`
position: absolute;
width:auto;
margin: auto;
`;


export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)