import styled from 'styled-components'
import Colors from '../../styles/Color'

const MessageWrapper = styled.div`
    background-color: ${props => props.isQuery ? Colors.secondary : Colors.primary};
    color: ${props => props.isQuery ? '#f0f0f0' : Colors.textPrimary};
    padding: 10px;
    border-radius: 10px;
    border-top-left-radius: ${props => props.isQuery ? 10 : 0}px;
    border-top-right-radius: ${props => props.isQuery ? 0 : 10}px;
    max-width: 500px;
    margin: 10px 20px;
    align-self: ${props => props.isQuery ? 'flex-end' : 'flex-start'};
    line-height: 1.7rem;
`

export default MessageWrapper
