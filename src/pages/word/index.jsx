import * as S from "./word.style";
import searchIcon from "./assets/searchIcon.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import theme from "../../styles/theme";
export default function Word() {
  const accessToken = localStorage.getItem("accessToken");
  const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
  const [words, setWords] = useState([]);
  const [category, setCategory] = useState("ALL");
  const [inputValue, setInputValue] = useState("");

  const getWordData = async () => {
    try {
      const res = await axios.get(
        `${SERVER_URL}/api/v1/dictionary?type=${category}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res.data);
      setWords(res.data.words);
    } catch (err) {
      console.log(err);
    }
  };
  const getWordSearchData = async () => {
    try {
      const res = await axios.get(
        `${SERVER_URL}/api/v1/dictionary?type=${category}&keyword=${inputValue}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res.data);
      setWords(res.data.words);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWordData();
  }, [category]);
  return (
    <S.App>
      <S.Container>
        <S.CategoryBox>
          <button
            style={{
              backgroundColor:
                category === "ALL" ? theme.color.main : theme.color.white, // 선택된 버튼의 배경색
              color: category === "ALL" ? theme.color.white : theme.color.black, // 선택된 버튼의 글씨색
            }}
            onClick={() => setCategory("ALL")}
          >
            전체
          </button>
          <button
            style={{
              backgroundColor:
                category === "CAFE" ? theme.color.main : theme.color.white, // 선택된 버튼의 배경색
              color:
                category === "CAFE" ? theme.color.white : theme.color.black, // 선택된 버튼의 글씨색
            }}
            onClick={() => setCategory("CAFE")}
          >
            카페
          </button>
          <button
            style={{
              backgroundColor:
                category === "FOOD" ? theme.color.main : theme.color.white, // 선택된 버튼의 배경색
              color:
                category === "FOOD" ? theme.color.white : theme.color.black, // 선택된 버튼의 글씨색
            }}
            onClick={() => setCategory("FOOD")}
          >
            음식점/패스트푸드
          </button>
        </S.CategoryBox>
        <S.SearchBox>
          <img src={searchIcon} />
          <input
            placeholder="검색하기"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={getWordSearchData}
          ></input>
        </S.SearchBox>
        <S.WordBox>
          <S.TitleBox>
            <div>단어</div>
            <div>의미 설명</div>
          </S.TitleBox>
          <S.MeaningBox>
            {words?.map((value, index) => {
              return (
                <div key={index}>
                  <h1>{value.word}</h1>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </S.MeaningBox>
        </S.WordBox>
      </S.Container>
    </S.App>
  );
}
