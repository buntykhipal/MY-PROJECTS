import styled from "styled-components";



export default function Total_Score({score}) {
  return (
    <Div>
        <div className="totalscore">
         <b>{score}</b>
         <p className="first">TOTAL <br />
         <span> SCORE</span> </p>
        </div>
    </Div>
  )
}

const Div=styled.div`
/* border: 1px solid red; */
min-width: 300px;
text-align: center;

b{
  
    /* border: 1px solid red; */
    font-size: 80px;
  
}
.totalscore .first {
   font-size: 50px;
   font-weight: 700;
   letter-spacing: 5px;
   line-height: 50px;

}
span{
    letter-spacing: 1px;
}
p{
    /* border: 1px solid red; */
    margin: 0px;
}
`;