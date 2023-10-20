import { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import "./App.css"

import Food from "./page/Food";
import Play from "./page/Play";
import Loading from "./page/Loading";

const FoodContainer = styled.article`
`
const FoodBox = styled.section`
  text-align: left !important;
  overflow: hidden;
  &>img{
    animation: foodImg 0.5s;
    @keyframes foodImg {
      0%{
        transform: scale(50%);
      }
      100%{
        transform: scale(100%);
      }
    }
  }
  &>div{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &>div>button{
    border: none;
    background-color: transparent;
  }

  &>p{
    padding: 5%;
  }
  &>p>div{
    margin: 1% 0;
  }
`

function App() {
  const [food, setFood] = useState({
    number: 0,
    totalCount: 0,
    loading: true
  })
  const [play,setPlay] = useState({
    number: 0,
    totalCount: 0,
    loading: true
  })

  function loadFood(){
    axios.get("https://apis.data.go.kr/5050000/eatHtpService/getEatHtp?serviceKey=qNq8t4PN4exOWyEgw04kCSr9OWIk7rMGZeF8X%2BbSr%2FEH%2BGiTc5lxeH4JXBV43Bc3HjLJ89njttANtSvt5ojUcA%3D%3D&pageNo="+food.number+"&numOfRows=1")
    .then(res=>{
      setFood({
        ...food,
        totalCount: res.data.response.body.totalCount,
        loading: false,
        ...res.data.response.body.items.item[0]
      })
    })
    .catch(err=>console.log("에러",err))
  }
  function loadPlay(){
    axios.get("https://apis.data.go.kr/5050000/dstrctsTrrsrtService/getDstrctsTrrsrt?serviceKey=qNq8t4PN4exOWyEgw04kCSr9OWIk7rMGZeF8X%2BbSr%2FEH%2BGiTc5lxeH4JXBV43Bc3HjLJ89njttANtSvt5ojUcA%3D%3D&pageNo="+play.number+"&numOfRows=1")
    .then(res=>{
      console.log(res.data)
      setPlay({
        ...play,
        // totalCount: res.data.response.body.totalCount,
        loading: false,
        // ...res.data.response.body.items.item[0]
      })
    })
    .catch(err=>console.log("에러",err))
  }

  useEffect(()=>{
    loadFood()
    loadPlay()
  },[food.number])

  console.log(food)

  return (
    <main>
      <header><h1>경주! 어디가?</h1></header>
      <FoodContainer>
        <h2>먹거리</h2>
        {food.loading
        ? <Loading />
        : <FoodBox><Food food={food} setFood={setFood} /></FoodBox>
        }
      </FoodContainer>
      <FoodContainer>
        <h2>놀거리</h2>
        {play.loading
        ? <Loading />
        : <FoodBox><Play play={play} setPlay={setPlay} /></FoodBox>
        }
      </FoodContainer>
      
    </main>
  );
}

export default App;
