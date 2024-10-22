// src/utils/encryptionUtils.js
import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key'; // Replace with your secret key

export const encryptId = (id) => {
    return CryptoJS.AES.encrypt(id.toString(), secretKey).toString();
};

export const decryptId = (encryptedId) => {
    const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8); // Return the decrypted ID
};
