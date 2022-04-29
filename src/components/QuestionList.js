import React from 'react'
import Question from './Question'

const QuestionList = ({questionBank,questionTags}) => {
    //console.log(questionBank)
    return (
        <div className="row mt-3 d-flex justify-content-center float-center ques-card">
            {
                questionBank.map((ques,i) => {
                    return(<Question key={i} ques={ques} questionTags={questionTags} i={i}/>)
                    
                })
            }
            
        </div>
    )
}

export default QuestionList