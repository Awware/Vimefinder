import firebase from 'firebase/app'

export default {
  actions: {
    async register({ dispatch, commit }, { login, email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
      } catch {
        //*Preparing error*
      }
    }
  }
}
