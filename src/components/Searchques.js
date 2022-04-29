import React from 'react'
import Question from './Question'
import { useState,useEffect } from 'react'
import {useStateWithCallback, useStateWithCallbackLazy} from 'use-state-with-callback'

const Searchques = ({ questionBank, questionTags }) => {
    const [searchedQuestion, setSearchedQuestion] = useState([])
    const [checkedTag, setCheckedTag] = useStateWithCallbackLazy([])
    const [searchByName, setSearchByName] = useState("")
    const searchfun = (e,tagValue) => {
        if(e.target.checked){
            // async function settags() {setCheckedTag([...checkedTag,tagValue])}
            // settags().then(
            //     function(value) {console.log(checkedTag)},
            //     function(error) {console.log(error);}
            //   )
                     
            setCheckedTag([...checkedTag, tagValue], (currt) => {
                let tempques=[]   
                currt.forEach((thistagval)=>{
                    //console.log(thistagval)
                    questionBank.forEach((thisques)=>{
                        if(thisques.tagid.includes(thistagval)){
                            let f=true
                            tempques.forEach((tmpques)=>{
                                if(tmpques.id===thisques.id){
                                    f=false
                                }
                            })
                            if(f){
                                tempques=[...tempques,thisques]
                            }
                            
                        }
                    })
                })
                setSearchedQuestion(tempques)
              })
            
        }else{
            setCheckedTag(checkedTag.filter((tag)=>tag!==tagValue),(currt) => {
                let tempques=[]   
                currt.forEach((thistagval)=>{
                    //console.log(thistagval)
                    questionBank.forEach((thisques)=>{
                        if(thisques.tagid.includes(thistagval)){
                            let f=true
                            tempques.forEach((tmpques)=>{
                                if(tmpques.id===thisques.id){
                                    f=false
                                }
                            })
                            if(f){
                                tempques=[...tempques,thisques]
                            }
                            
                        }
                    })
                })
                setSearchedQuestion(tempques)
              })
        }
        
    }
    const onSubmitTyped = (e) => {
        
        e.preventDefault()
        setSearchByName(searchByName.toLowerCase())
        let newques=[]
        questionBank.forEach((itm) => {
           let quesArray=itm.ques.split(" ")
           quesArray.forEach(questxt => {
               if(questxt.toLowerCase()===searchByName){
                   newques=[...newques,itm]
                   return
               }
           });
        })
        console.log(newques)
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
                                                id={"flexCheckDefault" + tag.value}
                                                onChange={e => searchfun(e,tag.value)}
                                                //checked={checkedTag[i].ischecked}
                                            />
                                            <label className="form-check-label" htmlFor={"flexCheckDefault" + tag.value}>{tag.label} </label>
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
                    return (<Question key={i} ques={ques} i={i} questionTags={questionTags} />)

                })
            }
        </div>
    )
}

export default Searchques