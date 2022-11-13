import styled from "styled-components"
import imagem from "../images/airbnb-logo.png"

const DivNavBar = styled.nav`
    height: 25px;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 20px 36px;
`

export default function NavBar() {
    return (
        <DivNavBar>
            <img src={imagem} alt="" />
        </DivNavBar>
    )
}