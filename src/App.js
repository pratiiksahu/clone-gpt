import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI. I'm designed to understand and generate human-like text based on the input I receive. You can ask me questions, have conversations, seek information, or even request assistance with various tasks. Just let me know how I can help you!",
      isBot: true
    }
  ])

  const handleSend = async () => {
    const res = sendMsgToOpenAI(input)
    setMessages([
      ...messages,
      { text: input, isBot: false},
      { text: res, isBot: true}
    ])
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo"/><span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Rocket" className="listItemsImg" />Upgrade to pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {/* <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius excepturi adipisci dolore! Expedita excepturi, vel laborum, beatae error fugiat facilis sint accusamus porro corporis sunt iure! Commodi deleniti eius ullam?</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam, recusandae consectetur quidem numquam blanditiis, veritatis fugiat voluptates esse, accusantium vero quos facere molestias? Doloribus sit odit maiores reiciendis eum beatae illum corrupti nobis modi magni obcaecati dicta voluptates sed, nulla quaerat excepturi eius placeat voluptate reprehenderit laudantium recusandae tempora aspernatur quo? Debitis illum vel laudantium natus similique cum quo molestiae repellendus hic eveniet itaque iure cupiditate eaque aliquam sit quia magni alias, ipsum cumque iste non. Hic beatae veniam perspiciatis quia enim eveniet ut aliquid ipsa odit similique? Autem sint quis laboriosam accusantium consequatur expedita exercitationem adipisci qui molestias.</p>
          </div> */}
          {messages.map((message, i) => 
          // unique way of returning through arrow function
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt="" /><p className="txt">{message.text}</p>
            </div>
          )}
          <div className="chatFooter">
            <div className="inp">
                <input 
                  type="text" 
                  placeholder='Send a message' 
                  value={input} 
                  onChange={(e) => {setInput(e.target.value)}}
                /><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
            </div>
            <p>ChatGPT may produce inaccrate informatino about people or facts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
