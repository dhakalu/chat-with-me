import React from 'react'
import MessageWrapper from './MessageWrapper'

const Message = ({ type, content }) => {
  return (
    <MessageWrapper isQuery={type === 'query'}>
      {content}
    </MessageWrapper>
  )
}

export default Message
