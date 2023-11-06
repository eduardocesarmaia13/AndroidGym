import { useNavigation } from "../../../contexts/useNavigation";

export function useDashboard() {
  const { handleClearUser, handleStep, handleUser } = useNavigation();

  const handleLoggout = async () => {
    await handleClearUser();
    handleUser(null);
    handleStep("auth");
  };

  return {
    handleLoggout,
  };
}
