import React from 'react';
import ProList from '../components/ProList';

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
          <ProList proList={this.props.profile} navigation={this.props.navigation} />
        </div>
        
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)