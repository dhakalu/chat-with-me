import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import Wrapper from './Wrapper'
import { getIntent, INTENTS } from '../../ai/AnswerUtils'
import SendIcon from './SendIcon'

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

  useEffect(() => {
    if (scrollableContent.current) {
      scrollableContent.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollableContent, messages.length])

  const onQuerySubmit = () => {
    if (!query) return
    setMessages(
      [...messages, {
        type: 'query',
        content: query
      }])
    setQueryId(queryId + 1)
  }

  const getRandomAnswer = (answers = []) => {
    if (!answers.length) return 'Opps! I could not understand what you just said :('
    const randomIndex = Math.floor(Math.random() * answers.length)
    return answers[randomIndex]
  }

  const responses = {
    [INTENTS.greeting]: ['Hi there, Nic to mee you!', 'Hello!', 'Hi,'],
    [INTENTS.profession]:
      ['I just do what I get trained to do. Upen, my boss, writes code most of working days. He does random things in weekends.'],
    [INTENTS.school]: ['Fisk University at Nashville, TN', 'I completed my BSC in Computer Science from Fisk University.'],
    [INTENTS.major]: ['Computer Science!'],
    [INTENTS.aboutme]: ['I am a robot. Upen created me to train me to answer some questions about him. Want to know him? click here.'],
    [INTENTS.name]: ['My name Boten. I am robot created by Upen.'],
    [INTENTS.favoriteColor]: ['I like green!', 'I like earthly colors'],
    [INTENTS.currentWork]: ['I answer your questions. Upen works at Change Healthcare as a Software Engineer.'],
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

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onQuerySubmit()
  }

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
            <div>
              {
                messages.map((message) => {
                  return (
                    <Message key={message.id} {...message} />
                  )
                })
              }
            </div>
          </div>
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={scrollableContent}
          />
        </div>
        <div className='query'>
          <form onSubmit={handleSubmit}>
            <input
              value={query}
              onChange={handleQueryChange}
              placeholder='Start typing...'
            />
          </form>
          <SendIcon
            tabIndex={0}
            onClick={handleSubmit}
            onEnter={handleSubmit}
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
    content: 'Hi there! Welcome to UpenAI. You can ask me any question either about me or real Upen.'
  }
]
