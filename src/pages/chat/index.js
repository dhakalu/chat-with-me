import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import Wrapper from './Wrapper'
import { getIntent, INTENTS } from '../../ai/AnswerUtils'

const ChatPage = ({
  initialMessages = testMessages
}) => {
  const scrollableContent = useRef(null)
  const [messages, setMessages] = useState([])
  const [queryId, setQueryId] = useState(null)

  useEffect(() => {
    setMessages(initialMessages)
  }, [initialMessages])

  const [query, setQuery] = useState('')

  const handleKeyPressOnInput = (event) => {
    const enterCharCode = 13
    if (event.charCode === enterCharCode) {
      setMessages(
        [...messages, {
          type: 'query',
          content: query
        }])
      setQueryId(queryId + 1)
    }
  }

  const getRandomAnswer = (answers = []) => {
    if (!answers.length) return 'Opps! I could not understand what you just said :('
    const randomIndex = Math.floor(Math.random() * answers.length)
    return answers[randomIndex]
  }

  const responses = {
    [INTENTS.greeting]: ['Hi there, Nic to mee you!', 'Hello!', 'Hi,'],
    [INTENTS.profession]: ['I am a software engineer!', 'I work as software engineer.'],
    [INTENTS.school]: ['Fisk University at Nashville, TN', 'I completed my BSC in Computer Science from Fisk University.'],
    [INTENTS.major]: ['Computer Science!'],
    [INTENTS.aboutme]: ['Human being, son, friend, software engineer!'],
    [INTENTS.name]: ['My name is Upen', 'I am virtual Upen', 'I am duplicate of Upen'],
    [INTENTS.favoriteColor]: ['I like green!', 'I like earthly colors'],
    error: ['I am having some troble processing. Try again!'],
    unknown: ['Oops! I am not that smart after all! Please try rephrasing.']
  }

  // TODO: seperate this out to its own file
  const getResponeFromIntent = async (intent) => {
    return {
      type: 'response', // todo move this to constant
      content: getRandomAnswer(responses[intent])
    }
  }

  useEffect(() => {
    // start fetching things
    if (queryId) {
      (async () => {
        setQuery('')
        const intent = await getIntent(query)
        console.log('intent', intent)
        const message = await getResponeFromIntent(intent)
        setMessages(
          [...messages, message])
      })()
    }
  // eslint-disable-next-line
  }, [queryId])

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (scrollableContent.current) {
      scrollableContent.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollableContent, messages.length])

  return (
    <Wrapper>
      <div className='chat-window-wrapper'>
        <div className='header'>
          <div className='header-title'>
              Artificial Upen
          </div>
        </div>
        <div className='chat-content-wrapper'>
          <div className='chat-content'>
            {
              messages.map((message) => {
                return (
                  <Message key={message.id} {...message} />
                )
              })
            }
          </div>
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={scrollableContent}
          />
        </div>
        <div className='query'>
          <input
            value={query}
            onChange={handleQueryChange}
            onKeyPress={handleKeyPressOnInput}
            placeholder='Start typing...'
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default ChatPage

const testMessages = [
  {
    id: 1,
    type: 'resonse',
    content: 'Hi there! Welcome to UpenAI. You can ask me any question about real Upen.'
  }
]
