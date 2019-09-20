import { generateAuthActions } from "redux-token-auth"


const config = {
  authUrl: "http://localhost:3001/auth",
  userAttributes: {
    email: 'email',
    password: 'password'
  },
  userRegistrationAttributes: {
    email: 'email',
    password: 'password'
  },
  storage: {
    flushGetRequests: false,
  },
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

const authHeaderKeys = ["access-token", "token-type", "client", "expiry", "uid"]

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
  authHeaderKeys,
}