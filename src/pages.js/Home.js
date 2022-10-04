import styled from "styled-components";
import { useState } from "react";

// import { getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore";


const QuoteKeeper = styled.div``
const TextContainer = styled.div`width: 70%; margin: 0 auto; background: rgba(0,0,0,.5); border: none; outline: none; border-radius: 3px; margin-top: 1em; padding: 1em;`
const TextEdit = styled.div`display: flex; justify-content: flex-end; gap: .5em;`
const TextInput = styled.textarea`width:100%; border-radius: 3px; outline: none; border: none;`
const Input = styled.input`padding: 1em; outline: none; border: none; margin-right: 1em;`
const Para = styled.p``
const AppendDiv = styled.p`display: flex; background: rgba(0,0,0,.5);`
const AddBtn = styled.button`background: green; padding: 1em 2em; font-size: 1rem; border: none; border-radius: 3px; font-weight: bold; cursor: pointer;`


const Home = () => {

    const [quotesData, setquotesData] = useState({
        quote: "",
        date: new Date(),
        author: "",
        writtenBy: "",
        likes: "",
        dislikes: ""
    })
    const [message, setMessage] = useState("")
    const [error, setError] = useState({
        quote: "",
        author: "",
        writtenBy: ""
    })

    const handleAddButton = async () => {
        try {
            if (quotesData.quote === "") {
                setError({ ...error, quote: "Enter a quote" })
            }
            if (quotesData.author === "") {
                setError({ ...error, author: "Enter the author of the quote" })
            }
            if (quotesData.writtenBy === "") {
                setError({ ...error, writtenBy: "Enter your name" })
            }
            else
                setMessage("Your quote has been successfully saved")
            await addDoc(collection(db, "quotes"), quotesData)
            setquotesData({
                quote: "",
                date: new Date(),
                author: "",
                writtenBy: "",
                likes: "",
                dislikes: ""
            })

            console.log("success")
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <QuoteKeeper>
            <TextContainer>
                <p >{message}</p>
                <TextEdit>
                    <Para>{error.quote}</Para>
                   

                </TextEdit>
                <TextInput value={quotesData.quote} placeholder="Insert Quote" rows="10" onChange={(e) => setquotesData({ ...quotesData, quote: e.target.value })} />
                <Para>{error.author} </Para>
                <Input value={quotesData.author} placeholder="Author" onChange={(e) => setquotesData({ ...quotesData, author: e.target.value })} />
                <Para>{error.writtenBy} </Para>
                <Input value={quotesData.writtenBy} placeholder="Written by" onChange={(e) => setquotesData({ ...quotesData, writtenBy: e.target.value })} />
                <AddBtn onClick={(e) => handleAddButton(e)} >Add Quote</AddBtn>
            </TextContainer>
            <AppendDiv>

            </AppendDiv>
        </QuoteKeeper>
    )
}

export default Home