import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToastMessage from "./useShowToastMessage";
import { doc, setDoc } from "firebase/firestore";

function useSignUpWithEmailAndPassword() {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToastMessage();

  const signUp = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.username ||
      !inputs.fullName ||
      !inputs.password
    ) {
      showToast("Error", "Please Fill all the fields", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        console.log(error);
        showToast("Error !newUser", error.message, "error");
        return;
      }

      const userDoc = {
        uid: newUser.user.uid,
        email: inputs.email,
        username: inputs.username,
        fullName: inputs.fullName,
        bio: "",
        profilePicURL: "",
        followers: [],
        following: [],
        posts: [],
        createdAt: Date.now(),
      };

      await setDoc(doc(firestore, "users", userDoc.uid), userDoc);

      localStorage.setItem("user", JSON.stringify(userDoc));

      showToast("Success", "User has been created successfully", "success");
      console.log(newUser);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { signUp, loading, error };
}

export default useSignUpWithEmailAndPassword;
