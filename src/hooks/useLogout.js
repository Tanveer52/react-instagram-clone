import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToastMessage from "./useShowToastMessage";

function useLogout() {
  const [signOut, loading, error] = useSignOut(auth);
  const showToast = useShowToastMessage();
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user");
      showToast("Success", "User has been logged out", "success");
    } catch (error) {
      showToast("Erorr", error.message, "error");
    }
  };

  return { handleLogout, loading, error };
}

export default useLogout;
