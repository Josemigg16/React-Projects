import { useState } from 'react'
import styled from '@emotion/styled'
import cryptoIMG from './img/imagen-criptos.png'
import Form from './components/Form'
import { useEffect } from 'react'
import Result from './components/Result'

const Heading = styled.h1`
  font-family:'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66f2fe;
    display: block;
    margin: 10px auto auto;
  }
`
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Img = styled.img`
  max-width:400px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {
  const [selectedCoins, setSelectedCoins] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)
  const [cryptoName, setCryptoName] = useState('')

  useEffect(() => {
    const findPrice = async () => {
      setLoading(true)
      setResult({})
      const response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedCoins.crypto}&tsyms=${selectedCoins.coin}`)
      const data = await response.json()
      setResult(data.DISPLAY[selectedCoins.crypto][selectedCoins.coin])
      setLoading(false)
    }
    findPrice()
  }, [selectedCoins])

  return (
    <Container>
      <Img
        src={cryptoIMG}
        alt="crypto img"
      />
      <div>
        <Heading>Watch Crypto Prices</Heading>
        <Form setSelectedCoins={setSelectedCoins} setCryptoName={setCryptoName} />
        {loading && <p>Loading...</p>}
        {result.PRICE && (
          <Result result={result} cryptoName={cryptoName} />
        )}
      </div>
    </Container>
  )
}

export default App
