import styled from "@emotion/styled"

const Message = styled.p`
    padding: 15px;
    color: #fff;
    text-transform: uppercase;
    background-color: #ee3434;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 5px;
`

const ErrorMessage = ({children}) => {
  return (
    <Message>{children}</Message>
  )
}

export default ErrorMessage