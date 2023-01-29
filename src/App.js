import React from 'react';

function App(props){
    return (
     <>
     <div className='cards'>
       <div className='card'>
         <img src={props.imgscr} alt="mypic" className='cards_image'/>
           <div className='card_info'>
             <span className='card_category'>{props.title}</span>
             <h3 className='card_title'>{props.sname}</h3>
             <a href={props.source} target='blank'>
               <button className="btns">S</button>
               <button className="btns">M</button>
               <button className="btns">L</button>
             </a>
             <div className='botto'>
              <h4>{props.con}</h4>
              <p id="bot">{props.tag}</p>
             </div>
           </div>
       </div>
     </div>
    </>
   
   );
    }
export default App;