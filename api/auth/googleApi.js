import {GoogleApis} from 'googleapis';

export const checker = () => {
  
    // GoogleApis.load('auth2', function() {
    //   const auth2 = GoogleApis.auth2.init({
    //     client_id: '594202953383-8ebq99ne1ujnamshi7pqk4q0teabh885.apps.googleusercontent.com',
    //     // Scopes to request in addition to 'profile' and 'email'
    //     //scope: 'additional_scope'
    //   });
    //   auth2.grantOfflineAccess().then(e =>{
    //     console.log(e)
    //   })
    // });


    const oAuth2Client = new GoogleApis.auth.OAuth2(
      "2e2noi122ioo", "jbniu12ui2uijkbuib", "http://www.fb.com");
      console.log("oAuth2Client")

} 