import React from "react";
import './index';
import World from './world.png'
import Cards from "./cards";
import KMimg from './images/KulluManali.jpg'
import GoaImg from './images/goa.jpg'
import MumbaiImg from './images/Mumbai.jpg'

function App() {
  return (
    <div className="App">
      <Nav />
      <FetchCard />
      <Footer />
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

function Footer() {
  return (
    <div className="footer">
      <center>
        <div className="root--nav--title">My Travel Diary</div>
        <hr className="footer-hr"></hr>
        <div class="foot-d">
          <svg class="foot-pic"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10 7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3-.7.3-1.3.9-1.5 1.6-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5 1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3-.8-.9-1.3-2.1-1.3-3.4V10 6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3.8.9 1.3 2.1 1.3 3.4V10z"></path> </g> </g></svg>
          <svg class="foot-pic" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#fff" d="M13.567 5.144c.008.123.008.247.008.371 0 3.796-2.889 8.173-8.172 8.173v-.002A8.131 8.131 0 011 12.398a5.768 5.768 0 004.25-1.19 2.876 2.876 0 01-2.683-1.995c.431.083.875.066 1.297-.05A2.873 2.873 0 011.56 6.348v-.036c.4.222.847.345 1.304.36a2.876 2.876 0 01-.89-3.836 8.152 8.152 0 005.92 3 2.874 2.874 0 014.895-2.619 5.763 5.763 0 001.824-.697 2.883 2.883 0 01-1.262 1.588A5.712 5.712 0 0015 3.656a5.834 5.834 0 01-1.433 1.488z"></path></g></svg>
          <svg class="foot-pic cf-icon-svg" fill="#ffffff" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3.335 6.498a1.152 1.152 0 0 1-1.248 1.148h-.015a1.15 1.15 0 1 1 .03-2.295 1.147 1.147 0 0 1 1.233 1.147zM.982 8.553h2.206v6.637H.982zm10.165 2.83v3.807H8.941v-3.55c0-.893-.319-1.502-1.12-1.502a1.21 1.21 0 0 0-1.13.807 1.516 1.516 0 0 0-.073.538v3.708H4.41s.03-6.017 0-6.639h2.21v.94l-.016.023h.015V9.49a2.19 2.19 0 0 1 1.989-1.095c1.451 0 2.54.949 2.54 2.988z"></path></g></svg>
        </div>
        <div className="footer-copy">Copyright &#169; All rights reserved | Made with ❤ by Deep Dhakate</div>
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
    img: KMimg,
    date: "6 March 2012 - 16 March 2012",
    details: "Manali is one of the best hill stations. It is a rustic enclave known for its cool climate and snow- capped mountains, offering respiteto tourists escaping scorching heat of plains. One can really enjoy the rains, snow cappped mountains and valleys. One of the best memories I had when I was Young."
  },
  {
    title: "Goa",
    img: GoaImg,
    date: "22 April 2019 - 2 May 2012",
    details: "Goa is my favorite place in india, it has beautiful landscapes, glorius views, beautiful beaches, most beautiful streets and amazing ambience.Great place to explore the wonderful Coast line from Candolim to Querim on foot. We had a great road trip from Pune to Goa. Baga Beach is very busy, but we have to say we thoroughly enjoyed it. "
  },
  {
    title: "Mumbai",
    img: MumbaiImg,
    date: "17 Dec 2022 - 18 Dec 2022",
    details: "One of the best place I have visited ever in my life. Mumbai the city of dreams, is really a great place to visit if you have special friend with you. Zoo, Parks, Beaches, Historic Places and the Queens Neckless, Marine Drive everything is amazing. This place has a diffrent spot in my heart."
  }
]

export default App;
