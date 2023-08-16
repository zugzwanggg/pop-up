import { useEffect, useState, useRef } from 'react'
import './App.scss'

function App() {
  const [open,setOpen] = useState(false)
  const [text,setText] = useState('example')
  const [seconds, setSeconds] = useState(0)


  const link = `https://${text ? text : 'example'}.com/article/social-share-modal`;


  useEffect(()=>{
    
    seconds > 0 && setTimeout(() => {
      return setSeconds(seconds - 1)
    },1000)

  },[seconds])



  function copyLink(e) {
    e.preventDefault()
    setSeconds(1)
    navigator.clipboard.writeText(link)
  }
  return (
    <div className='container'>
      {open && <div className='during-popup'></div>}
      {!open && <div className='btn-part'><button className='share-btn' onClick={()=>setOpen(prev=>!prev)}>Share</button></div>}
      <div className={open ? "share-modal active" : "share-modal"}>
        <button onClick={()=>setOpen(prev=>!prev)} className='exit'><img src="./img/exit.svg" alt="" /></button>
        <div className="headertext">
          <h3>Share this article</h3>
          <p>If you like this article share it with your friends.</p>
        </div>
        <div className='soc-media'>
          <div onClick={()=>setText('twitter')} className='soc-media__items twitter'><img src="./img/twitter.svg" alt="" /><span className='twitter-text'>Twitter</span></div>
          <div onClick={()=>setText('facebook')} className="soc-media__items facebook"><img src="./img/facebook.svg" alt="" /><span className='facebook-text'>Facebook</span></div>
          <div onClick={()=>setText('reddit')} className="soc-media__items reddit"><img src="./img/reddit.svg" alt="" /><span className='reddit-text'>Reddit</span></div>
          <div onClick={()=>setText('whatsapp')} className="soc-media__items whatsapp"><img src="./img/whatsapp.svg" alt="" /><span className='whatsapp-text'>WhatsApp</span></div>
        </div>
        <form onSubmit={copyLink} action="">
          <input disabled placeholder={link} type="text" />
          <button><img src="./img/share.svg" alt="" /></button>
        </form>
        <div className={seconds > 0 ? 'copied-modal active' : 'copied-modal'}>
          <p>Copied to clipboard</p>
        </div>
      </div>
    </div>
  )
}

export default App
