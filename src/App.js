import "./App.css"
import Header from './components/Header';
import { useState } from "react";
import AddQuestion from "./components/AddQuestion";
import QuestionList from "./components/QuestionList";
import UpadateQues from "./components/UpadateQues";
import Searchques from "./components/Searchques";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [questionBank, setQuestionBank] = useState([
    {
      id: 1,
      ques: "A parallel plate capacitor stores a charge Q at voltage V. Suppose the area of the capacitor and the distance between the plates are each doubled then which is the quantity that will change?",
      ans:"Given, the charge stored by the capacitor is Q and voltage is V. Let the capacitance of the capacitor is C. The capacitance of a parallel plate...",
      tagid: 1
    },{
      id: 2,
      ques: " Adding two decimals together is easier than it looks. Dont let the fact that 8.563 has fewer numbers than 4.8292 trip you up. All you have to do is add a 0 to the end of 8.563 and then add like you normally would.",
      ans:"Seven",
      tagid: 2
    }
  ])
  const [questionTags, setQuestionTags] = useState([
    {
      id: 1,
      name: "Physics"
    }, {
      id: 2,
      name: "Maths"
    }, {
      id: 3,
      name: "Biology"
    }, {
      id: 4,
      name: "Reasonig"
    }, {
      id: 5,
      name: "Cosmoloy"
    }, {
      id: 7,
      name: "Physcology"
    },
  ])
  // const test=()=>{
  //    const libMax = Math.max(...questionTags.map(item => item.id))
  //    return libMax
  // }
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
  // setQuestionBank(questionBank.filter((ques)=>ques.id!==newQues.id))
  // setQuestionBank([...questionBank,newQues])
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
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<QuestionList questionBank={questionBank} />}></Route>
          <Route exact path='/addquestion' element={<AddQuestion questionTags={questionTags} addQues={addQues}  /> }></Route>
          <Route exact path='/searchquestion' element={<Searchques questionBank={questionBank} questionTags={questionTags}  /> }></Route>

          {questionBank.map((ques)=>(
            <>
              <Route
                key={ques.id} 
                exact 
                path={"/searchquestion/" + ques.id}  
                element={<UpadateQues thisques={ques} key={ ques.id} questionTags={questionTags} upadteQues={upadteQues} /> }>
              </Route>
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
