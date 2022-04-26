import React from 'react'
import { useState } from 'react'
const AddQuestion = ({questionTags,addQues}) => {
    const[ques,setQues]=useState("")
    const[thisAns,setThisAns]=useState("")
    const[quesTag,setQuesTag]=useState("")
    const onSubmit =(e)=>{
        e.preventDefault()
        addQues({
            ques:ques,
            tagid:parseInt(quesTag),
            ans:thisAns
        })
        setQues("")
        setThisAns("")
        setQuesTag("")
    }
    return (
        <div className="container">]
            <div className="row ">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" role="form" onSubmit={onSubmit}>
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_message">Question *</label>
                                                    <textarea 
                                                        id="form_message" 
                                                        name="message" 
                                                        className="form-control" 
                                                        placeholder="Write your message here." 
                                                        rows="4" 
                                                        required="required" 
                                                        data-error="Please, leave us a message."
                                                        value={ques} 
                                                        onChange={(e)=>setQues(e.target.value)}
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_message">Answer *</label>
                                                    <textarea 
                                                        id="form_message" 
                                                        name="message" 
                                                        className="form-control" 
                                                        placeholder="Write your message here." 
                                                        rows="4" 
                                                        required="required" 
                                                        data-error="Please, leave us a message."
                                                        value={thisAns} 
                                                        onChange={(e)=>setThisAns(e.target.value)}
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                <label htmlFor="form_need">Please specify the tag  *</label>
                                                    <select onChange={e => setQuesTag(e.target.value)} value={quesTag}    id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                                    {<option value={""}  disabled>--Select Question's tag--</option>}
                                                    {
                                                        questionTags.map(tag => {
                                                            return(<option key={tag.id} value={tag.id}>{tag.name}</option>)
                                                            
                                                        })
                                                    }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " defaultValue={"Send Message"} /> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion