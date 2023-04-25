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
    toast.success("Created Successfully");
    return 1;
  } catch (err) {
    toast.error("Something Went Wrong");
    return 0;
  }
};

const LoginAccount = async (email, password) => {
  try {
    const promise = await account.createEmailSession(email, password);
    toast.success("Signed in successfully");
    // alert(promise);
    return 1;
  } catch {
    toast.error("Invalid username or password");
    return 0;
  }
};

export { createAcc, LoginAccount };
