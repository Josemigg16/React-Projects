import styled from "@emotion/styled"

const Text = styled.p`
  font-family:'Lato', sans-serif;
  color: #eee;
  font-size: 18px;
  font-weight: 700;
  &::after{
    content: "";
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 1px;
    background: #fff;
    position: absolute;
    font-weight: 700;
  }
`
const Title = styled.p`
  font-family:'Lato', sans-serif;
  color: #eee;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: -5px;
`

const Price = styled.p`
  font-family:'Lato', sans-serif;
  color: #ddbb11;
  font-weight: 700;
  font-size: 18px;
  margin-left: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  position: relative;
`
const Picture = styled.img`
  height: 20px;
`

const Result = ({ result, cryptoName }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = result
  return (
    <>
      <Title>
        <Picture

          src={`https://cryptocompare.com/${IMAGEURL}`}

        />{cryptoName}</Title>
      <Grid>
        <Text>Price is: </Text><Price>{PRICE}</Price>
        <Text>Highest price today is:  </Text><Price>{HIGHDAY}</Price>
        <Text>Lowest price today is:  </Text><Price>{LOWDAY}</Price>
        <Text>Change in last 24 hours: </Text><Price>{CHANGEPCT24HOUR}</Price>
        <Text>Last update: </Text><Price>{LASTUPDATE}</Price>
      </Grid>
    </>
  )
}

export default Result