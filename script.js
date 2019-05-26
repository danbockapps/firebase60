const firebase = require('firebase')

const config = {
  apiKey: 'AIzaSyBmauMItX-bkUO1GGO_Nvrycy1Y6Pj1o_s',
  authDomain: 'fir-test-app-501b1.firebaseapp.com',
  databaseURL: 'https://fir-test-app-501b1.firebaseio.com',
  projectId: 'fir-test-app-501b1',
}

firebase.initializeApp(config)
firebase.firestore().collection('activities')
  .get()
  .then(qs => qs.docs.forEach(doc => console.log(doc.data())))
  .then(() => console.log('done.'))
