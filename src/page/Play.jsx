


function Play({play,setPlay}){
  return(
    <>
    <img
    src={"https://"+play.CON_IMGFILENAME}
    width="100%"
    alt="경주 맛집들의 대표이미지"
    />
    <div>
      <button onClick={()=>
          play.number>1
          ? setPlay({...play,number: play.number-1,loading: true})
          : setPlay({...play,number: play.totalCount,loading: true})
      }>
          ◀
      </button>
      <button onClick={()=>{
          play.number<play.totalCount
          ? setPlay({...play,number: play.number+1,loading: true})
          : setPlay({...play,number: 1,loading: true})
      }}>
          ▶
      </button>
    </div>
    <p>
      <div>장소: <strong>{play.CON_TITLE}</strong></div>
      <div>{play.SRC_TITLE}</div>
      <div>연락처: <strong>{play.CON_DESC2}</strong></div>
      <div>
        <a href={"https://"+play.LINKURL} target="_blank"><button>자세히 보기</button></a>
      </div>
    </p>
    </>
  )
}
export default Play;