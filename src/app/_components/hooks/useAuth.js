import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부
  const [isLoading, setIsLoading] = useState(true); // 로그인 시도중인 상태
  const [userName, setUserName] = useState(""); // 사용자 이름

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/profile`, {
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
    window.location.href =
      "https://easily-dashboard.jojicompany.com/login?fallback=" +
      window.location.href;
  };

  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
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
