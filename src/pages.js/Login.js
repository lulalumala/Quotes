import styled from "styled-components";
import { useState } from "react";
import { green } from "@mui/material/colors";


const LoginForm = styled.div`text-align: center; padding: 1em;`
const Input = styled.input`display: block; width: 90%; margin: 0 auto; border: none; border-bottom: 2px solid black; margin-bottom: 2em; padding: 1em; font-size: 1rem; background: inherit; outline: none; `
const P = styled.p``
const H = styled.h2``
const Submit = styled.input`cursor: pointer; padding: 1em 2em; background: #674747; margin: 0 auto; width: 20%; border-radius: 3px; color: green; border: none; font-size: 1rem; font-weight: bold;`

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirm: ""
    })

    const [error, setError] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirm: ""
    })
    const [message, setMessage]=useState("")
    const handleSubmit = () => {
        try {
            if (loginInfo.name === "") {
                setError({...error, name:"Enter your name"})
            }
            if (loginInfo.phone === "") {
                setError({...error, phone: "Enter your phone number"})
            }
            if (loginInfo.email === "") {
                setError({...error, email:"Enter your Email Address"})
            }
            if (loginInfo.password === "") {
                setError({...error, password: "Enter your password"})
            }
            if (loginInfo.confirm !== loginInfo.password) {
                setError({...error, confirm:"Your password does not match"})
            }
            else
                setMessage("Your Account has been successfully created")
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <LoginForm>
            <H>LOGIN</H>
            <P>{error.name }</P>
            <Input type="text" placeholder="Name" onChange={(e)=> setLoginInfo({...loginInfo, name:e.target.value})}/>
            <P>{error.phone} </P>
            <Input  type="text" placeholder="Phone Number" onChange={(e)=>setLoginInfo({...loginInfo,phone:e.target.value }) } />
            <P>{error.email} </P>
            <Input type="text" placeholder="Email Address" onChange={(e)=>setLoginInfo({...loginInfo, email: e.target.value}) } />
            <P>{error.password } </P>
            <Input type="password" placeholder="Password" onChange={(e)=>setLoginInfo({...loginInfo, password: e.target.value }) } />
            <P>{error.confirm } </P>
            <Input type="password" placeholder="Confirm Password" onChange={(e) => setLoginInfo({ ...loginInfo, confirm: e.target.value })} />
            <P style={{color: green}} >{message} </P>
            <Submit value="SUBMIT" type="submit" onClick={(e)=>handleSubmit(e)} />


        </LoginForm>

    )
}
export default Login