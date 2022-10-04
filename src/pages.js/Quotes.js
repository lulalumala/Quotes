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
import { color } from "@mui/system";


const QuoteContainer = styled.div`padding-top: 1em;`
const Card = styled.div`padding: 1em; width: 70%; box-shadow: 0 0 3px grey; margin: 0 auto;`;
const P = styled.p`
color: ${props => {
        if (props.color == "red") {
            return "red"
        }
        else if (props.color == "green") {
            return "green"
        }
    }};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
`
const date = new Date()
const LikeDiv = styled.div``
const Button = styled.button`cursor: pointer;`



const Quotes = () => {
    const [thumbdown, setThumbdown] = useState(0)
    const [thumbup, setThumbup] = useState(0)
    const [opinion, setOpinion] = useState({
        like: false,
        dislike: false
    })
    useEffect(() => {
        const fetchQuotes = async () => {
            const querySnapshot = await getDocs(collection(db, "cities"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        }
        fetchQuotes()
    }, [])





    return (
        <QuoteContainer>
            <Card>
                <Button><EditIcon /></Button>
                <Button><DeleteIcon /></Button>
                <P>"When the going gets tough, the tough gets going"</P>
                <P color="red">Author: Random rastaman</P>
                <P color="green">Written By: Another Bwobwo</P>
                <LikeDiv>
                    <Button onClick={(e) => setOpinion(prev => ({ ...prev, like: !prev }))}><ThumbUpIcon />{opinion.like?1 : ""}</Button>
                    <Button onClick={(e) => setOpinion(prev => ({...prev, dislike:!prev}))}><ThumbDownIcon />{opinion.dislike ? 1 : ""}</Button>
                </LikeDiv>
            </Card>

        </QuoteContainer>
    )
}
export default Quotes