import React from 'react'

const App = () => {
  
  // Event Listener and Event Handler

  // const ClickHandler1 = () => {
  //   console.log("Clicked");
  // }
  
  // return (
  //   <>
  //   <div className='w-[80%] flex justify-center items-center mx-auto mt-5 p-5 rounded'>
  //     <button
  //       onClick={ClickHandler1}
  //       className='w-[50] p-2 text-white text-center rounded bg-red-500 hover:bg-green-600'> Submit </button>
  //   </div>
  //   </>
  //   )
    

    // function wrapper

    const ClickHandler = (msg) => {
      console.log(msg);
    }
    const wrapper = () => ClickHandler("Hello World")

    return (
    <>
    <div className='w-[80%] flex justify-center items-center mx-auto mt-5 p-5 rounded'>
      <button
        onClick={wrapper}
        className='w-[50] p-2 text-white text-center rounded bg-blue-500 hover:bg-yellow-800'> Submit </button>
    </div>
    </>
    )


}

export default App