import "./App.css"
import Header from './components/Header';
import { useState } from "react";
import AddQuestion from "./components/AddQuestion";
import QuestionList from "./components/QuestionList";
import UpadateQues from "./components/UpadateQues";
import Searchques from "./components/Searchques";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from "react";

function App() {
  const [tempQuestionBank, settempQuestionBank] = useState([
    {
      id: 1,
      ques: "A parallel plate capacitor stores a charge Q at voltage V. Suppose the area of the capacitor and the distance between the plates are each doubled then which is the quantity that will change?",
      ans:"Given, the charge stored by the capacitor is Q and voltage is V. Let the capacitance of the capacitor is C. The capacitance of a parallel plate...",
      tagid: [1,2]
    },{
      id: 2,
      ques: " Adding two decimals together is easier than it looks. Dont let the fact that 8.563 has fewer numbers than 4.8292 trip you up. All you have to do is add a 0 to the end of 8.563 and then add like you normally would.",
      ans:"Seven",
      tagid: [3,4]
    }
  ])
  const [questionTags, setQuestionTags] = useState([
    {
      value: 1,
      label: "Physics"
    },{
      value: 2,
      label: "Maths"
    },{
      value: 3,
      label: "BioLogy"
    },{
      value: 4,
      label: "reasoning"
    },{
      value: 5,
      label: "Cosmology"
    },{
      value: 6,
      label: "Phsychology"
    }
  ])
  // const test=()=>{
  //    const libMax = Math.max(...questionTags.map(item => item.id))
  //    return libMax
  // }
  const [questionBank,setQuestionBank]=useState([])
  const addQues=(newQues)=>{
    const maxId = Math.max(...questionBank.map(item => item.id))
    newQues.id=maxId+1
    setQuestionBank([...questionBank,newQues])
    //console.log([...questionBank,newQues])
    return maxId
 }
 const upadteQues=(newQues)=>{
   //console.log(newQues)
  const tempques=[...questionBank]
  tempques.forEach((q,i)=>{
    if(q.id==newQues.id){
      //console.log(q.ans)
      tempques[i]=newQues
    }
  })
  setQuestionBank([...tempques])
  //console.log(tempques)  
}

//console.log(test())
useEffect(() => {
  let data = localStorage.getItem('state'); 
  
  window.addEventListener('load', (ev) => {
    let data = localStorage.getItem('questionBank');
    //console.log(data)
    if(data !== undefined && JSON.parse(data).length!==0) { 
      setQuestionBank(JSON.parse(data));
      console.log(JSON.parse(data).length) 
    }else if(data !== undefined && JSON.parse(data).length===0){
      setQuestionBank(tempQuestionBank)
    }
 })
  window.addEventListener('beforeunload', (ev) => {
    localStorage.setItem('questionBank', JSON.stringify(questionBank));
 })
}, [questionBank]);
  return (
    <>
      <Router>
        <Header />
        
        
        <Routes>
          <Route exact path='/' element={<QuestionList questionBank={questionBank} questionTags={questionTags} />}></Route>
          <Route exact path='/addquestion' element={<AddQuestion questionTags={questionTags} addQues={addQues}  />}></Route>
          <Route exact path='/searchquestion' element={<Searchques questionBank={questionBank} questionTags={questionTags}  /> }></Route>

          {questionBank.map((ques)=>(
            <>
              {/* <Route
                key={ques.id} 
                exact 
                path={"/searchquestion/" + ques.id}  
                element={<UpadateQues thisques={ques} key={ ques.id} questionTags={questionTags} upadteQues={upadteQues} /> }>
              </Route> */}
              <Route
                key={ques.id} 
                exact 
                path={"/" + ques.id}  
                element={<UpadateQues thisques={ques} key={ ques.id} questionTags={questionTags} upadteQues={upadteQues} /> }>
              </Route>
            </>
          ))}
        </Routes>
      </Router>

      {/**/}
      
    </>
  );
}

export default App;
