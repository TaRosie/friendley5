import React, {useState} from 'react';
import './App.css';
import ReactGA from 'react-ga';

function initializeReactGA(){
ReactGA.initialize('UA-151652737-1');
ReactGA.pageview("/");
}

initializeReactGA();


let article = [
  {
    image: './personal.png',
    intro:"<p>Our <a href = 'https://leanstack.com/app/nyushanghai/projects/505249/canvases/607523/'> FRIENDLEY</a> social media platform divides the feeds of celebrities and personal communities, and includes features to encourage personal interaction.</p> <p> By simply clicking on the button under the user/celebrity image, you can change to the celebrity/user screen that reminds you of whether you are reading carefully curated celebrity content. </p><p>This app encourages you to interact with people from your friends network by accumulating interaction points.</p> ",
    bg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576205594&di=b13ffab7fcd5ed7e46d1c39623030c24&imgtype=jpg&er=1&src=http%3A%2F%2Fimg01.taopic.com%2F171024%2F240409-1G0240I64687.jpg',
    function:'You can only DM and tag your friends in posts which increases the Friend interaction point between you and your friend. '
  },
  {
    image:"./celebrity.png",
    bg:'https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-dream-starry-sky-beautiful-blue-purple-image_20208.jpg',
    function:'You cannot DM and tag celebrities, but you can like and comment their posts. '
  }
]



function App() {



  const[mode, setMode] =  useState('personal');

  function handleClick(){
    console.log('clicked');

    if(mode==='Personal'){
      setMode('Celebrity');
    } else{
        setMode('Personal');
    }
    ReactGA.event({
      category:'Interaction',
      action:'Change the mode'
    });
  }

  function link(){
    window.location = "https://leanstack.com/app/nyushanghai/projects/505249/canvases/607523";

    ReactGA.event({
      category:'Interaction',
      action:'Click the link'
    });
  }


  

  let imgPath = (mode === 'Personal' ? article[0].image : article[1].image);
  let bgPath = (mode === 'Personal' ? article[0].bg : article[1].bg);
  let fcPath = (mode === 'Personal' ? article[0].function : article[1].function);

  return (
    <div className="App" style={{backgroundImage: 'url(' + bgPath + ')'}}>
      <div className = "header">
      <style>
      @import url('https://fonts.googleapis.com/css?family=Courgette|Roboto&display=swap');
      </style>
      <h1 ><span class="hr3">Ba</span><span class="hr4">lan</span><span class="hr5">ce</span></h1>
      <h2>Discourage unhealthy social media comparison.</h2>  
      <img src={imgPath} width="100"/>
      <p>{mode}</p>
 
      <button onClick={handleClick}> Switch </button>
      <div className="fc">
      <p>{fcPath}</p>
      </div>
      </div> 
      <div  className="content">
        <div dangerouslySetInnerHTML={{__html: article[0].intro}}/>
        </div>
        <div className = "link">
        <button onClick={link}> Our Business Plan </button>
      </div>
   </div>
  );
}


export default App;

