import { useToast } from "@chakra-ui/react";

function useShowToastMessage() {
  const toast = useToast();
  function showToast(title, description, status) {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
    });
  }

  return showToast;
}

export default useShowToastMessage;
