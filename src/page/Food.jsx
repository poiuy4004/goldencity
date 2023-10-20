
function Food({food,setFood}){
  return(
    <>
    <img
    src={"https://"+food.CON_IMGFILENAME}
    width="100%"
    alt="경주 맛집들의 대표이미지"
    />
    <div>
      <button onClick={()=>
          food.number>1
          ? setFood({...food,number: food.number-1,loading: true})
          : setFood({...food,number: food.totalCount,loading: true})
      }>
          ◀
      </button>
      <button onClick={()=>{
          food.number<food.totalCount
          ? setFood({...food,number: food.number+1,loading: true})
          : setFood({...food,number: 1,loading: true})
      }}>
          ▶
      </button>
    </div>
    <p>
      <div>매장: <strong>{food.CON_TITLE}</strong></div>
      <div>{food.SRC_TITLE}</div>
      <div>연락처: <strong>{food.CON_DESC2}</strong></div>
      <div>
        <a href={"https://"+food.LINKURL} target="_blank"><button>자세히 보기</button></a>
      </div>
    </p>
    </>
  )
}
export default Food;