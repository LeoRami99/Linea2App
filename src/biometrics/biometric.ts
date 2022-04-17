import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio';

    
export function bioFunc() {
      FingerprintAIO.isAvailable().then((result: any) => {
            console.log(result)
      
            FingerprintAIO.show({
              cancelButtonTitle: 'Cancel',
              description: "Some biometric description",
              disableBackup: true,
              title: 'Scanner Title',
              fallbackButtonTitle: 'FB Back Button',
              subtitle: 'This SubTitle'
            })
              .then((result: any) => {
                console.log(result)
                alert("Successfully Authenticated!")
              })
              .catch((error: any) => {
                console.log(error)
                alert("Match not found!")
              });
      
          })
            .catch((error: any) => {
              console.log(error)
            });
        }

 
// // export const biometric = new BiometricFingerprint(new FingerprintAIO()); 
// import { NativeBiometric } from "capacitor-native-biometric";

// // import { NativeBiometric } from "capacitor-native-biometric";

// // Check if biometrics are available and which type is supported
// NativeBiometric.isAvailable().then(
//   (result: AvailableResult) => {
//     const isAvailable = result.isAvailable;
//     const isFaceId = result.biometryType == BiometryType.FINGER;

//     if (isAvailable) {
//       // Get user's credentials
//       NativeBiometric.getCredentials({
//         server: "www.example.com",
//       }).then((credentials: Credentials) => {
//         // Authenticate using biometrics before logging the user in
//         NativeBiometric.verifyIdentity({
//           reason: "For easy log in",
//           title: "Log in",
//           subtitle: "Maybe add subtitle here?",
//           description: "Maybe a description too?",
//         }).then(
//           () => {
//             // Authentication successful
//             this.login(credentials.username, credentials.password);
//           },
//           (error) => {
//             // Failed to authenticate
//           }
//         );
//       });
//     }
//   },
//   (error) => {
//     // Couldn't check availability
//   }
// );

// // Save user's credentials
// NativeBiometric.setCredentials({
//   username: "username",
//   password: "password",
//   server: "www.example.com",
// }).then();

// // Delete user's credentials
// NativeBiometric.deleteCredentials({
//   server: "www.example.com",
// }).then();
