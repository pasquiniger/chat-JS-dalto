'use strict'

const input = document.querySelector('.text-input'),
	history = document.querySelector('.chat-history'),
	sendBtn = document.querySelector('.send-btn')


const sendMessage = input =>{
	const msgContainer = document.createElement('DIV'),
		msgP = document.createElement('P'),
		msgSpan = document.createElement('SPAN'),
		text = document.createTextNode(input.value)
	msgSpan.appendChild(text)
	msgP.classList.add('message-text', 'emisor-text')
	msgContainer.classList.add('message-container', 'emisor-container')
	msgP.appendChild(msgSpan)
	msgContainer.appendChild(msgP)

	history.appendChild(msgContainer)
	input.value = ''
}


sendBtn.addEventListener('click', ()=> sendMessage(input))

