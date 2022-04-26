import React from 'react'
import Question from './Question'
import { useState } from 'react'
const Searchques = ({ questionBank, questionTags }) => {
    const [searchedQuestion, setSearchedQuestion] = useState([...questionBank])
    const [checkedTag, setCheckedTag] = useState([...questionTags])
    const [searchByName, setSearchByName] = useState("")
    //const [searchedId, setSearchedId] = useState("")
    const searchfun = () => {
        let newques = []
        ///console.log(checkedTag)
        checkedTag.forEach((itm, i) => {
            if (itm.ischecked ) {
                questionBank.forEach((item)=>{
                    if(item.tagid === itm.id){
                        let f=true
                        newques.forEach((item2)=>{
                            console.log()
                            if(item.id===item2.id){
                               // console.log()
                                f=false
                            }
                        })
                        if(f){
                            newques = [...newques, item]
                        }
                        
                    }
                })
                //console.log("................")                
            }
        })
        console.log(questionBank)
        console.log(newques)
        setSearchedQuestion(newques)
        //setQuestionBank(questionBank.filter((ques,i)=>!checkedTag[i].ischecked))
    }
    const onSubmitTyped = (e) => {
        
        e.preventDefault()
        setSearchByName(searchByName.toLowerCase())
        
        let temptag = questionTags
        let searchedId=-1
        temptag.forEach((itm) => {
            
            if (itm.name.toLowerCase() === searchByName) {
                
                searchedId=itm.id
                //console.log("yes")
            }
        })
        let newques = []
        let tempqb = questionBank
        tempqb.forEach((itm) => {
            if (itm.tagid === searchedId) {
                newques = [...newques, itm]
            }
        })
        setSearchedQuestion(newques)
        setSearchByName("")
    }
    return (
        <div className="row mt-3 d-flex justify-content-center float-center ques-card">
            <div className="col-8 mb-4">
                <div className="card quescard bg-warning">
                    <div className="card-body d-flex flow-row">
                        <div className='w-50'>
                            <h5 className="card-title">Filter by tags</h5>
                            {
                                questionTags.map((tag, i) => {
                                    return (
                                        <div key={i} className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={"flexCheckDefault" + tag.id}
                                                onChange={e => {
                                                    const newCheckboxes = [...checkedTag]
                                                    newCheckboxes[i].ischecked = e.target.checked
                                                    setCheckedTag(newCheckboxes)
                                                    //console.log(checkedTag)
                                                    searchfun()
                                                }}
                                                checked={checkedTag[i].ischecked}
                                            />
                                            <label className="form-check-label" htmlFor={"flexCheckDefault" + tag.id}>{tag.name} </label>
                                        </div>)

                                })
                            }
                        </div>
                        <div className="input-group w-50">
                            <div className="form-outline" >
                                <form className='form-control d-flex flex-row' onSubmit={onSubmitTyped}>
                                    <input type="search"
                                        id="form1"
                                        className="form-control"
                                        value={searchByName}
                                        onChange={(e) => setSearchByName(e.target.value)}
                                    />
                                    <button type="button" id="form2" className="btn btn-primary" onClick={onSubmitTyped}>
                                        Search
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {
                searchedQuestion.map((ques, i) => {
                    return (<Question key={i} ques={ques} i={i} />)

                })
            }
        </div>
    )
}

export default Searchques