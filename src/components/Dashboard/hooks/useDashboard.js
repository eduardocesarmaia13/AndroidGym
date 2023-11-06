import { useNavigation } from "../../../contexts/useNavigation";
import { useGetUser } from "../../../services/users/get";
import { useState, useEffect } from "react";

export function useDashboard() {
  const { data, isFetching } = useGetUser();
  const [users, setUsers] = useState([]);
  const { handleClearUser, handleStep, handleUser } = useNavigation();

  useEffect(() => {
    if (data) setUsers(data ?? []);
  }, [isFetching]);

  const handleLoggout = async () => {
    await handleClearUser();
    handleUser(null);
    handleStep("auth");
  };

  return {
    handleLoggout,
    users,
  };
}
