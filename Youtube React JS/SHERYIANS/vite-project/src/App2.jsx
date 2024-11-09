import React from 'react'
import Card from './components/Card';

// Props : value

const App2 = () => {

    // const user = 'Piyush Dahle'

    const users = [{
        name: 'Toney Stark',
        city: 'New York',
        age: 30,
        gender: 'Male',
        url: 'https://i.redd.it/what-would-tony-stark-think-of-john-walker-v0-28mug8fgrexc1.jpg?width=728&format=pjpg&auto=webp&s=c61bde3efb1be68cda472df8d0f99a8e481ad489',
      },
    {
        name: 'God Of Thunder',
        city: 'Asgard',
        age: 40,
        gender: 'Male',
        url: 'https://www.cheatsheet.com/wp-content/uploads/2020/05/chris-hemsworth-4.jpg',
      },
     {
        name: 'Black Widow',
        city: 'Paris',
        age: 24,
        gender: 'Female',
        url: 'https://preview.redd.it/agree-or-disagree-black-widow-in-iron-man-2-is-her-best-v0-0iiejopkzoqd1.jpeg?auto=webp&s=79eac16496386f4af3311a12b983537de0281cf6',
      },
    {
        name: 'Steve Rogers',
        city: 'New York',
        age: 50,
        gender: 'Male',
        url: 'https://live.screendollars.com/wp-content/uploads/2021/10/chris-evans.jpg',
      }]

// users.map(function (e) {
//     console.log(e);
// })


  return (
    <div className=' flex justify-center items-center
     gap-5 bg-slate-400 h-[100vh]'>
    {/* <Card naam={user} />  
    <Card naam={'Jai Shree Ram'} />   */}
{users.map(function (ele,index) {
    return <Card key={index} name={ele.name} city={ele.city} age={ele.age} gender={ele.gender} url={ele.url} />
})}
    </div>
  )
}

export default App2;