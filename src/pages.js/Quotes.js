import styled from "styled-components";
import { useEffect, useState } from "react";
// icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDownAlt';
// import data from firestore
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Nav from "../components/Nav";


const QuoteContainer = styled.div``
const Card = styled.div`padding: 1em; width: 70%; box-shadow: 0 0 3px grey; margin: 0 auto;`;
const P = styled.p`font-size: 2rem;
color: ${props => {
        if (props.color === "red") {
            return "red"
        }
        else if (props.color === "green") {
            return "green"
        }
    }};                                                                 
`

const LikeDiv = styled.div``
const Button = styled.button`cursor: pointer;`
const FetchButton = styled.button`background: rgba(255,255,255,.5); padding: 1em 2em; border-radius: 3px; border: none; font-size: 2rem; cursor: pointer; position: bottom 0; margin: 1em; font-weight: bold;`


const Quotes = () => {
    const [opinion, setOpinion] = useState({
        like: false,
        dislike: false
    })
    const [data, setData] = useState([])
    const [fetchedQuote, setFetchedQuote] = useState("")

    useEffect(() => {
        const fetchQuotes = async () => {
            const querySnapshot = await getDocs(collection(db, "quotes"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setData(prev => [...prev, doc.data()])
            });
        }
        fetchQuotes()
    }, [])


    useEffect(() => {
        changequote()
    }, [data])

    const changequote = () => {
        const randomizequote = Math.floor(Math.random() * data.length)
        data !== undefined && setFetchedQuote(data[randomizequote])
    }

    const handleFetch = () => {
        changequote()
        console.log(data)
    }


    return (
        <QuoteContainer>
<Nav/>
            <Card>
                <Button><EditIcon /></Button>
                <Button><DeleteIcon /></Button>

                <P>{fetchedQuote !== undefined && fetchedQuote.quote} </P>
                <P>{fetchedQuote !== undefined && fetchedQuote.author} </P>
                <P>{fetchedQuote !== undefined && fetchedQuote.writtenBy} </P>
                {/* <P>{fetchedQuote !==undefined && fetchedQuote.date} </P> */}

                {console.log(fetchedQuote)}
                <LikeDiv>
                    <Button onClick={(e) => setOpinion(prev => ({ ...prev, like: !prev.like }))}><ThumbUpIcon />{opinion.like ? 1 : ""}</Button>
                    <Button onClick={(e) => setOpinion(prev => ({ ...prev, dislike: !prev.dislike }))}><ThumbDownIcon />{opinion.dislike ? 1 : ""}</Button>
                </LikeDiv>


            <FetchButton onClick={handleFetch}>FETCH QUOTE</FetchButton>
            </Card>
        </QuoteContainer>
    )
}
export default Quotes