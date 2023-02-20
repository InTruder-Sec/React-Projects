import React from "react";
import './index';
import World from './world.png'
import Cards from "./cards";

function App() {
  return (
    <div className="App">
      <Nav />
      <FetchCard />
    </div>
  );
}

function Nav() {
  return (
    <div className="root--nav">
    <center>
      <table>
        <tr>
          <td><img className="root--img" src={World} alt="world"></img></td>
          <td className="root-title"><div className="root--nav--title">My Travel Diary</div></td>
        </tr>
      </table>
    </center>
    </div>
  )
}

function FetchCard() {
  const card = data.map(item => {
    return (
      <Cards 
      title={item.title} 
      img={item.img} 
      date={item.date}
      details={item.details}
      />
    )
  })
  return (
    <div>
      {card}
    </div>
  )
}

let data = [ 
  {
    title: "Kullu Manali",
    img: "./images/KulluManali.jpg",
    date: "6 March 2012 - 16 March 2012",
    details: "Manali is one of the best hill stations. It is a rustic enclave known for its cool climate and snow- capped mountains, offering respiteto tourists escaping scorching heat of plains. One can really enjoy the rains, snow cappped mountains and valleys. One of the best memories I had when I was Young."
  },
  {
    title: "Goa",
    img: "./images/Goa.jpg",
    date: "22 April 2019 - 2 May 2012",
    details: "Goa is my favorite place in india, it has beautiful landscapes, glorius views, beautiful beaches, most beautiful streets and amazing ambience.Great place to explore the wonderful Coast line from Candolim to Querim on foot. We had a great road trip from Pune to Goa. Baga Beach is very busy, but we have to say we thoroughly enjoyed it. "
  },
  {
    title: "Mumbai",
    img: "./images/Mumbai.jpg",
    date: "17 Dec 2022 - 18 Dec 2022",
    details: "One of the best place I have visited ever in my life. Mumbai the city of dreams, is really a great place to visit if you have special friends with you. Zoo, Parks, Beaches, Historic Places and the Queens Neckless, Marine Drive will always be in my heart. This place has a diffrent spot in my heart."
  }
]

export default App;
