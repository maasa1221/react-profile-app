import axios from 'axios';
import { registerUser } from '../config/redux-token-auth-config';
import AWS from "aws-sdk";




export function mapStateToProps(state) {
  return state;
}
export function mapDispatchToProps(dispatch) {
  return{
    getProfile: () => {
        axios.get('http://localhost:3001/profiles')
        .then((response) => {
            dispatch({type:'SET_USER_PROFILES', profile: response.data})
        })
    },
    postProfile: (prof) => {
      axios.post('http://localhost:3001/profiles',prof)
      .then(() => {
          dispatch({type:'CREATE_USER_PROFILES'})
      })
    },

    putProfile: (prof,id) => {
      console.log('http://localhost:3001/profiles/'+ id)
      axios.put('http://localhost:3001/profiles/'+ id,prof)
      .then((response) => {
        console.log("aaaa")
          dispatch({type:'UPDATE_USER_PROFILES', profile: response.data})
          
      })
    },


    postPhoto: (photo) => {
      AWS.config.update({
        region: "", // Put your aws region here
        accessKeyId: "",
        secretAccessKey:"",
      })
      const options = {
        Bucket: "",
            Key: "",
            ContentType: "",
            Body: "",
            ACL: "",
      }
      console.log(photo)
      var s3 = new AWS.S3();
      s3.putObject(options, function(err, data) {
        if(err) {
            console.log("Err: upload failed :" +err);
        } else {
            console.log("Success: upload ok");
        }
      });
    },
    
    registerSuccess: ({email,password}) => {
      registerUser({ email, password})
        .then(() => {
            dispatch({type:"REGISTER_SUCCESS"})
      })
    }
  }
}
