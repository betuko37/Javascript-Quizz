//import { IconButton, Stack } from "@mui/material";
import { Card, Typography } from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import { type Question as QuestionType } from "./types";
import SintaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'


const Question = ({info}: {info: QuestionType}) =>{
    return (

        <Card variant="outlined" sx={{textAlign: 'left', p:2, bgcolor: '#222'}}>

            {/* Pregunta */}
            <Typography variant="h5" >{info.question}</Typography>

            {/* Codigo */}
            <SintaxHighlighter  language="javascript" style={atomOneDarkReasonable}>
                {info.code}
            </SintaxHighlighter>

        </Card>
    )
}

export const Game = () => {

    const questions = useQuestionsStore(state => state.questions)
    const currentQuestions = useQuestionsStore(state => state.currentQuestion)

    const questionInfo = questions[currentQuestions]

    return (
        <>
                <Question info={questionInfo} />

        </>
    )

}