import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Question = ({ques,i}) => {
    const[quesId,setQuesId]=useState(null)
    //console.log(ques)
    const onSubmit =(e)=>{
        e.preventDefault()
        setQuesId()
    }
    return (
        <div className="col-8 mb-4">
            <div className="card quescard">
                <div className="card-body">
                    <h5 className="card-title">Q{i+1}</h5>
                    <p className="card-text">
                    <b>{ques.ques}</b>
                    </p>
                    <button type="button" className="btn btn-primary updt-btn mx-3">
                        <Link  to={"" + ques.id} >{"Edit"}</Link>
                    </button>
                    <button type="button" className="btn btn-primary updt-btn" onClick={e => setQuesId(ques.id)} >
                        Show Answer
                    </button>
                </div>
            </div>
            <div className={`card anscard mb-4 ${ques.id===quesId ? "showAns" : "hideAns"}`}>
                <div className="card-body">
                    
                    <p className="card-text"><b>Ans : </b>{ques.ans}</p>
                </div>
            </div>
        </div>
    )
}

export default Question