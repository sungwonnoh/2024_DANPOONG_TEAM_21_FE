import * as S from "./video.style";
import animationData from "./loading.json";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Loading() {
  const location = useLocation(); // location에서 state 가져오기
  const navigate = useNavigate();
  const { type } = location.state || {}; // 전달된 state에서 type 추출
  const accessToken = localStorage.getItem("accessToken");

  const [data, setData] = useState();
  const [videoUrl, setVideoUrl] = useState("");

  const getVideo = async () => {
    try {
      const res = await axios.get(
        `https://ordereasy.duckdns.org/api/v1/tutorial/videos`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const fetchedData = res.data.data;
      setData(fetchedData); // 데이터 저장

      // type과 storeName 비교 후 videoUrl 추출
      const matchedItem = fetchedData.find((item) => item.storeName === type);
      if (matchedItem) {
        setVideoUrl(matchedItem.videoUrl);
      }

      console.log(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };
  // const handleRedirect = () => {
  //   if (videoUrl) {
  //     window.location.href = videoUrl; // videoUrl로 이동
  //   }
  // };

  useEffect(() => {
    getVideo();
  }, []);
  return (
    <S.App>
      <S.Container>
        {/* <S.Title>
          <h1>{type} 무인 결제기 시범 영상</h1>
          <h1>페이지로 이동 중입니다</h1>
          <p>잠시만 기다려주세요...</p>
        </S.Title> */}
        {videoUrl ? (
          (window.location.href = videoUrl)
        ) : (
          <S.Icon loop={true} animationData={animationData} />
        )}

        {/* <button onClick={() => navigate(-1)}>중단하기</button> */}
      </S.Container>
    </S.App>
  );
}
