import { Client, Account, ID } from "appwrite";
import { toast } from "react-toastify";

const client = new Client();

const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("644652ef2083b98c6c6b");

const createAcc = async (email, username, password) => {
  try {
    const promise = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    toast.success("Account Created Successfully");
    return 1;
  } catch (err) {
    toast.error(err.message);
    return 0;
  }
};

const LoginAccount = async (email, password) => {
  try {
    const promise = await account.createEmailSession(email, password);
    document.cookie = "session=" + JSON.stringify(promise);
    toast.success("Signed in successfully");
    return 1;
  } catch (err) {
    toast.error(err.message);
    return 0;
  }
};

const ForgotPasswordSend = async (email) => {
  try {
    const promise = await account.createRecovery(
      email,
      "http://localhost/reset"
    );
    console.log(promise);
    return 1;
  } catch (err) {
    toast.error(err.message);
    return 0;
  }
};

const UpdateRecovery = async (userId, secret, password, cnfpassword) => {
  try {
    const promise = await account.updateRecovery(
      userId,
      secret,
      password,
      cnfpassword
    );
    return 1;
  } catch (err) {
    toast.error(err.message);
    return 0;
  }
};

const OAuthGoogle = async () => {
  try {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "openid",
    ];
    const promise = await account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/",
      scopes
    );
    return promise;
  } catch (er) {
    console.log(er);
  }
};

export {
  createAcc,
  LoginAccount,
  ForgotPasswordSend,
  UpdateRecovery,
  OAuthGoogle,
};
