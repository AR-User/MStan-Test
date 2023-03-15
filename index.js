import React, { Fragment, useState } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import './index.scss';

function App() {
	
	const DemoWrapper = (props) => {
		return (
			<div className="demo-wrapper">
				<div className="demo-wrapper-content">
					{props.children}
				</div>
			</div>
		)
	}
	
	
	
	const ChatWindow = (props) => {
		
		const Titlebar = (props) => {
      return (
        <div className="titlebar">
				<div className="title">
					{props.title}
				</div>
				<div className="actions">
					<button class="close icons8-close">
						x
					</button>
				</div>
			</div>
      )
			
		}
		
		const MessageArea = (props) => {
			const TextField = (props) => {
				return (
					<input class="text-field" />
				)
			}
			const Button = (props) => {
				return (
					<button type="button">Send</button>
				)
			}
			return (
				<div className="message-area">
					<TextField/>
					<Button/>
				</div>
			)
		}
		
		const IncomingChatBubble = (props) => {
			return (
				<div className="chat-bubble"><div className="message incoming">{props.message}</div></div>
			)
		}
		
		const OutgoingChatBubble = (props) => {
			// TODO: remove inline styles
			return (
				<div class="chat-bubble">
					<div style={{marginTop: 10, marginBottom: 10}} className="message outgoing">
						{props.children}
					</div>
				</div>
			)
		}
		
		return (
			<div className="chat-window">
				<Titlebar title="Chat" />
				<div className="chat-wrapper">
					<OutgoingChatBubble>Open the pod bay doors, Hal.</OutgoingChatBubble>
					<IncomingChatBubble message="I’m sorry, Dave. I’m afraid I can’t do that. "/>
					<OutgoingChatBubble>What’s the problem?</OutgoingChatBubble>
					<IncomingChatBubble message="I think you know what the problem is just as well as l do. "/>
					<OutgoingChatBubble>What are you talking about, Hal?</OutgoingChatBubble>
					<IncomingChatBubble message="This mission is too important for me to allow you to jeopardize it. "/>
					<OutgoingChatBubble>I don’t know what you're talking about, Hal.</OutgoingChatBubble>
					<IncomingChatBubble message="I know that you and Frank were planning to disconnect me, and I’m afraid that's something I can’t allow to happen."/>
					<OutgoingChatBubble>Where the hell’d you get that idea, Hal?</OutgoingChatBubble>
					<IncomingChatBubble message="Although you took very thorough precautions in the pod against my hearing you, I could see your lips move."/>
					<OutgoingChatBubble>All right, Hal. I’ll go in through the emergency air lock. </OutgoingChatBubble>
					<IncomingChatBubble message="Without your space helmet, Dave, you’re going to find that rather difficult. "/>
					<OutgoingChatBubble>Hal, I won’t argue with you anymore. Open the doors!</OutgoingChatBubble>
					<IncomingChatBubble message="Dave...This conversation can serve no purpose anymore. Goodbye."/>
				</div>
				<MessageArea/>
			</div>
		)
	}

    const Example = () => {
        const [count, setCount] = useState(0);

        return (
            <div>
				<p>You  activated {count} times</p>
				<button onClick={() => setCount(count + 1)}>
				  Click me
				</button>
			 </div>
        )
    }

    return (
		 <DemoWrapper>
			 <ChatWindow/>
		 </DemoWrapper>
	 )
}

ReactDOM.render(<App />, document.getElementById('app'));