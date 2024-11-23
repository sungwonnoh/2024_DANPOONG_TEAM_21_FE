import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useKakaoLogin = (code) => {
  const navigate = useNavigate();

  const fetchKakaoData = async () => {
    try {
      const res = await axios.post(
        `https://ordereasy.duckdns.org/api/v1/login/oauth2/kakao?code=${code}`,
        {}
      ); // API 명세서에 따라 method, uri 바뀔 예정
      const data = res.data;
      navigate("/");
      localStorage.setItem("accessToken", data.accessToken);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKakaoData();
  }, []);

  return null;
};

export default useKakaoLogin;
