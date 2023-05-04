import { Client, Account, ID, Databases } from "appwrite";
import { toast } from "react-toastify";

const client = new Client();

const account = new Account(client);

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("644652ef2083b98c6c6b");

const databaseID = "64477883cee991eae1a7";
const collectionId = "644778ca0d7933b1732d";

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

const FetchUser = async (setuserDetails, setusrTransaction) => {
  try {
    account.get().then(async (e) => {
      setuserDetails(e);
      let uID = e.$id;
      try {
        GetTransaction(uID, setusrTransaction);
      } catch {}
    });
    return 1;
  } catch (err) {
    return 0;
  }
};

const CreateUserTransaction = async (uID, newTransaction) => {
  try {
    const data = await databases.createDocument(databaseID, collectionId, uID, {
      UserTransaction: newTransaction,
    });
    toast.success("Transaction added successfully!");
  } catch (err) {
    console.log(err);
    console.log("something went wrong");
  }
};

const GetTransaction = async (uID, setusrTransaction) => {
  try {
    databases.getDocument(databaseID, collectionId, uID).then((e) => {
      setusrTransaction(e.UserTransaction);
      return e;
    });
  } catch (err) {}
};

const UpdateTransaction = async (uID, newTran) => {
  console.log(newTran);
  try {
    databases
      .updateDocument(databaseID, collectionId, uID, newTran)
      .then((e) => {
        toast.success("Transaction added successfully");
      });
  } catch (err) {
    toast.error("Transaction  Failed");
    console.log(err);
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
  CreateUserTransaction,
  GetTransaction,
  UpdateTransaction,
};
