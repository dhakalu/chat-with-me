import styled from 'styled-components'
import Colors from '../../styles/Color'

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: ${Colors.secondary};
    color: #aaa;
    .chat-window-wrapper {
        display: flex;
        flex-direction: column;
        background: ${Colors.secondary};
        height: 100vh;
        width: 100vw;
        box-shadow: 0 0 20px 0 #121212;

        @media (min-width: 1020px) {
            width: 680px;
            border: 2px solid  ${Colors.secondary};
        }

        .header {
            padding: 10px;
            border-bottom: 2px solid  ${Colors.secondary};
            width: calc(100% - 20px);
            box-shadow: 0 0 30px -10px #121212;
            .header-title {
                font-size: 1.3em;
            }
        }

        .chat-content-wrapper {
            overflow: auto;
            flex: 1;
        }

        .chat-content-wrapper::-webkit-scrollbar {
            background-color: ${Colors.secondary};
            width:16px
        }
        
        /* background of the scrollbar except button or resizer */
        .chat-content-wrapper::-webkit-scrollbar-track {
            background-color: ${Colors.secondary};
        }
       
     
        /* scrollbar itself */
        .chat-content-wrapper::-webkit-scrollbar-thumb {
            background-color: ${Colors.primary};
            border-radius:16px;
            border:5px solid ${Colors.secondary};
        }
        .chat-content-wrapper::-webkit-scrollbar-thumb:hover {
            background-color:#a0a0a5;
            border:4px solid ${Colors.secondary};
        }
        
        /* set button(top and bottom of the scrollbar) */
        .chat-content-wrapper::-webkit-scrollbar-button {display:none}
        

        .chat-content {
            display: flex;
            flex-direction: column;
        }

        .query{
            margin: 10px;
            width: calc(100% - 22px);
            input {
                width: calc(100% - 36px);
                border: none;
                border-radius: 22px;
                background: #212121;
                outline: none;
                color: #f0f0f0;
                padding: 11px 18px;
            }
        }
    }
`

export default Wrapper
