import { useState, useEffect } from "react";
import {
  API_BASE_URL,
  DASHBOARD_LOGIN_URL,
} from "../../_consts/external_urls";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부
  const [isLoading, setIsLoading] = useState(true); // 로그인 시도중인 상태
  const [userName, setUserName] = useState(""); // 사용자 이름

  useEffect(() => {
    fetch(`${API_BASE_URL}/auth/profile`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          throw new Error("Unauthorized");
        } else {
          throw new Error("Unexpected error");
        }
      })
      .then((data) => {
        setIsLoggedIn(true);
        setUserName(data.name);
      })
      .catch((error) => {
        if (error.message === "Unauthorized") {
          setIsLoggedIn(false);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const redirectToLogin = () => {
    window.location.href = `${DASHBOARD_LOGIN_URL}?fallback=${window.location.href}`;
  };

  const handleLogout = () => {
    fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    }).then((response) => {
      if (response.status === 201) {
        setIsLoggedIn(false);
      } else {
        console.error("Failed to logout.");
      }
    });
  };

  return {
    isLoggedIn,
    isLoading,
    userName,
    redirectToLogin,
    handleLogout,
  };
};

export default useAuth;
