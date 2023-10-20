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
  &>p>:last-child{
    text-align: center;
  }
  &>p>:last-child button{
    border: none;
    border-radius: 7px;
    padding: 2% 3%;
    font-weight: bolder;
    background-color: rgb(0, 255, 255);
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.12);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  &>p>:last-child button:hover{
    box-shadow: 0.1rem 0.1rem 0.2rem 0.2rem rgba(0,0,0,0.25);
  }
  &>p>:last-child button:active{
    box-shadow: -0.02rem -0.1rem 0.2rem 0.2rem rgba(0,0,0,0.25);
    background-color: rgb(0, 240, 240);
  }
`

function App() {
  const [food, setFood] = useState({
    number: 1,
    totalCount: 9,
    loading: true
  })
  const [play,setPlay] = useState({
    number: 1,
    totalCount: 9,
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
      console.log(res.data.response.body)
      setPlay({
        ...play,
        totalCount: res.data.response.body.totalCount,
        loading: false,
        ...res.data.response.body.items.item[0]
      })
    })
    .catch(err=>console.log("에러",err))
  }

  useEffect(()=>{
    loadFood()
    loadPlay()
  },[food.number,play.number])

  console.log(food)

  return (
    <main>
      <div></div>
      <header>
        <h1>경주! 어디가?</h1>
      </header>
      <FoodContainer>
        <h2><strong>먹거리</strong></h2>
        {food.loading
        ? <Loading />
        : <FoodBox><Food food={food} setFood={setFood} /></FoodBox>
        }
      </FoodContainer>
      <FoodContainer>
        <h2><strong>놀거리</strong></h2>
        {play.loading
        ? <Loading />
        : <FoodBox><Play play={play} setPlay={setPlay} /></FoodBox>
        }
      </FoodContainer>
      <div></div>
    </main>
  );
}

export default App;
