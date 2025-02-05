
import admin from "firebase-admin";
import * as serviceAccount from './firebase-service.json'

import config from "../app/config";
const firebaseJsonBase64 = config.firebase_service as string ;
// eslint-disable-next-line no-undef
const firebaseJson = Buffer.from(firebaseJsonBase64, "base64").toString("utf-8")
const adminApp = admin.initializeApp({
    credential: admin.credential.cert(config.node_env === 'production' ? firebaseJson : serviceAccount as admin.ServiceAccount)
});

export default adminApp
