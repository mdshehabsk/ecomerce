
import admin from "firebase-admin";
import * as serviceAccount from './firebase-service.json'
const adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

export default adminApp
