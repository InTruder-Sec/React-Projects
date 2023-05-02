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

const DeleteSession = async () => {
  try {
    await account.deleteSession("current");
    await toast.success("Logged out successfully");
  } catch {
    toast.error("Something Went wrong");
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
    toast.error("Something went wrong");
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

const OAuthGoogle = (e) => {
  e.preventDefault();
  try {
    account
      .createOAuth2Session(
        "google",
        "http://localhost:3000/dashboard",
        "http://localhost:3000/"
      )
      .then(FetchUser());
  } catch (er) {
    console.log(er);
  }
};

const FetchUser = async (setuserDetails) => {
  try {
    const e = await account.get();
    setuserDetails(e);
    return 1;
  } catch (err) {
    // setuserDetails("logge");
    return 0;
  }
};

export {
  createAcc,
  LoginAccount,
  ForgotPasswordSend,
  UpdateRecovery,
  OAuthGoogle,
  FetchUser,
  DeleteSession,
};
