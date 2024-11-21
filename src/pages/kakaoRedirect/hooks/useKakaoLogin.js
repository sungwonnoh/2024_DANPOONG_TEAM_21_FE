import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useKakaoLogin = (code) => {
  const navigate = useNavigate();
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const fetchKakaoData = async () => {
    try {
      const res = await axios.post(
        `${serverURL}/api/v1/login/kakao?code=${code}`,
        {}
      ); // API 명세서에 따라 method, uri 바뀔 예정

      navigate("/");
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
