import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Auth from "../utils/auth.js";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    if (!Auth.isAuthenticated() || Auth.isTokenExpired()) {
      Auth.logout();
      router.push("/login");
    }
  }, [router]);
};

export default useAuth;
