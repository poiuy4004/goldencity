
import styled from "styled-components";

const LoadingContainer = styled.section`
  text-align: center;
`

function Loading(){
  return(
    <LoadingContainer>
      <img
        src="https://high.gwnu.ac.kr/contents/images/boxloading.gif"
        width="100%"
        alt=""
      />
    </LoadingContainer>
  )
}
export default Loading;