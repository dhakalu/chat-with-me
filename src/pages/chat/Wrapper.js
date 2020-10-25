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
    background: ${Colors.background};
    color: #aaa;
    .chat-window-wrapper {
        elevation: 1;
        display: flex;
        flex-direction: column;
        background: ${Colors.surface};
        height: 100vh;
        width: 100vw;
        box-shadow: 0 0 20px 0 #121212;

        @media (min-width: 1020px) {
            width: 680px;
            border: 2px solid  ${Colors.surface};
        }

        .header {
            padding: 10px;
            border-bottom: 2px solid  ${Colors.surface};
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
            background-color: ${Colors.surface};
            width:16px;
        }
        
        /* background of the scrollbar except button or resizer */
        .chat-content-wrapper::-webkit-scrollbar-track {
            background-color: ${Colors.surface};
        }
       
     
        /* scrollbar itself */
        .chat-content-wrapper::-webkit-scrollbar-thumb {
            background-color: ${Colors.surface};
            border-radius:16px;
            border:5px solid ${Colors.surface};
        }
        .chat-content-wrapper::-webkit-scrollbar-thumb:hover {
            background-color:#a0a0a5;
            border:4px solid ${Colors.secondary};
        }
        
        /* set button(top and bottom of the scrollbar) */
        .chat-content-wrapper::-webkit-scrollbar-button {display:none}
        

        .chat-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
        }

        .query{
            margin: 10px;
            width: calc(100% - 22px);
            display: flex;
            
            form {
                flex: 1;
                margin-right: 7px;
            }

            input {
                width: calc(100% - 36px);
                border: none;
                border-radius: 22px;
                background: #212121;
                outline: none;
                color: #f0f0f0;
                padding: 11px 18px;
                font-size: 16px;
                height: 26px;
                
            }

            .send-icon {
                height: 26px;
                width: 26px;
                padding: 10px;
                background: #BB86FC;
                border-radius: 50%;
                outline: none;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`

export default Wrapper
