import React from 'react'
import Question from './Question'
import { useState } from 'react'

const QuestionList = ({questionBank,questionTags}) => {
    //console.log(questionBank)
    const [quesId, setQuesId] = useState(null)
    const changeQuesId=(thisQuesId)=>{
        setQuesId(thisQuesId)

    }
    return (
        <div className="row mt-3 d-flex justify-content-center float-center ques-card">
            {
                questionBank.map((ques,i) => {
                    return(<Question key={i} ques={ques} questionTags={questionTags} quesId={quesId} changeQuesId={changeQuesId} i={i}/>)
                    
                })
            }
            
        </div>
    )
}

export default QuestionList