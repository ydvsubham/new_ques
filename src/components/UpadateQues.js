import React from 'react'
import { useState } from 'react'
import Select from 'react-select';

const UpadateQues = ({ thisques, questionTags, upadteQues }) => {
    const [ques, setQues] = useState(thisques.ques)
    const [thisAns, setThisAns] = useState(thisques.ans)

    let temptag = []
    thisques.tagid.forEach(id => {
        let temp = []
        questionTags.forEach((tag) => {
            if (tag.value === id) {
                temptag.push({ label: tag.label, value: tag.value })
            }
        })
        //temptag = [...temptag, temp]
    });
    const [quesTag, setQuesTag] = useState(temptag)
    console.log(quesTag)
    const onSubmit = (e) => {
        e.preventDefault()
        let tags=[]
        quesTag.forEach((itm)=>{
            tags.push(itm.value)
        })
        upadteQues({
            id: thisques.id,
            ques: ques,
            tagid: tags,
            ans: thisAns
        })

        setQues("")
        setThisAns("")
        setQuesTag([])
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
                                                        onChange={(e) => setQues(e.target.value)}
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
                                                        onChange={(e) => setThisAns(e.target.value)}
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <label htmlFor="form_need">Please specify the tag  *</label>
                                                    <Select
                                                        id="form_need"
                                                        options={questionTags}
                                                        isMulti
                                                        value={quesTag}
                                                        onChange={opt => setQuesTag(opt)}

                                                    />
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


export default UpadateQues