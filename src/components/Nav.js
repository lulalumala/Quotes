import styled from "styled-components";
import { Link } from "react-router-dom";
import Home from "../pages.js/Home";
import Login from "../pages.js/Login";
import Quotes from "../pages.js/Quotes";

const NavBar = styled.div`display: flex; justify-content: space-between; padding: 0 1em; font-size: 3rem; background: rgba(255,255,255,.5); margin: 0 auto; `
const P = styled.p`color: black; text-decoration: none;`
const Div = styled.div`display: flex; gap: 2em;`



const Nav = () => {
    return (
        <NavBar>
            <Div><P>Quotes Keeper</P></Div>
            <Div>
                <Link to="/quotes"><P>Quotes</P></Link>
                <Link to="/login"><P>Login</P></Link>
                <Link to="/"><P>Add Quotes</P></Link>
                
            </Div>

        </NavBar>
    )
}
export default Nav