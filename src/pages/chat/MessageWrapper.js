import styled from 'styled-components'
import Colors from '../../styles/Color'

const MessageWrapper = styled.div`
    background-color: ${props => props.isQuery ? 'blue' : Colors.primary};
    color: ${props => props.isQuery ? '#f0f0f0' : Colors.textPrimary};
    padding: 10px;
    border-radius: 10px;
    max-width: 500px;
    margin: 10px 20px;
    align-self: ${props => props.isQuery ? 'flex-end' : 'flex-start'};
`

export default MessageWrapper
