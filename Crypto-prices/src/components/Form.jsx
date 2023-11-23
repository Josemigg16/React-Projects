import { useState } from 'react'
import styled from '@emotion/styled'
import useSelectCoins from '../Hooks/useSelectCoins'
import { useEffect } from 'react'
import ErrorMessage from './ErrorMessage'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 20px;
    
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`


const Form = ({ setSelectedCoins, setCryptoName }) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const getCrypto = async () => {
            const response = await fetch('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD')
            const cryptos = await response.json()
            const cryptosList = cryptos.Data.map(crypto => {
                return { id: crypto.CoinInfo.Name, name: crypto.CoinInfo.FullName }
            })
            setCryptos(cryptosList)
        }
        getCrypto()
    }, [])

    const coins = [
        { id: 'USD', name: 'American Dollar' },
        { id: 'EUR', name: 'Euro' },
        { id: 'GBP', name: 'British Pound' },
        { id: 'MXN', name: 'Mexican Peso' },
    ]


    const [SelectCoins, coin] = useSelectCoins(
        'Select Coins',
        coins
    )

    const [SelectCryptos, crypto] = useSelectCoins(
        'Select Cryptos',
        cryptos
    )

    const handleSubmit = e => {
        e.preventDefault()
        if ([coin, crypto].includes("")) {
            setError('You must select all fields')
            return
        }
        setError('')
        setCryptoName(crypto)
        setSelectedCoins({ coin, crypto })
    }

    return (
        <>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <form onSubmit={handleSubmit}>
                <SelectCoins />
                <SelectCryptos />
                <InputSubmit
                    type="submit"
                    value="Show Prices"
                />
            </form>
        </>
    )
}

export default Form