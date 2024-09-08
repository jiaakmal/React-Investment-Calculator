import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

// Define the App component that renders the Header and UserInput components

function App() {
  const [userInput , setUserInput]= useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
   });
   const isValidDuration = userInput.duration >= 1
 

   function handleChange(inputIdentifier , newValue){
    setUserInput(prevUserInput => {
        return {...prevUserInput , [inputIdentifier] : newValue}
    })

   }

  return (
    <>
    <Header/>
    <UserInput onChange={handleChange} userInput={userInput}/>
    {isValidDuration ? <Results input={userInput}/> : <p className="center">Enter A Valid Duration</p>}
    </>
  );
}

export default App
