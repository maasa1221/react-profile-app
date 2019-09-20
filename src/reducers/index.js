const initialState = { 
  profile: {
    
  }
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
      case 'SET_USER_PROFILES':
        return {profile: action.profile}

      case 'CREATE_USER_PROFILES':
          return {profile: action.profile}
          
      case 'UPDATE_USER_PROFILES':
        console.log(state.profile[action.profile.id-1])
        state.profile[action.profile.id-1]=action.profile
        console.log(state.profile[action.profile.id-1])
        console.log(state.profile)
        return  
      
      case "LOGIN_UPDATE_PARAMS":
        return 

      case "LOGIN_SUCCESS":
          return 
          
      case "LOGIN_FAILURE":
        return 

      case "REGISTER_UPDATE_PARAMS":
          return 
    
      case "REGISTER_SUCCESS":
          return 
              
      case "REGISTER_FAILURE":
        return 
      
      default:
        return state;
  }
}




 