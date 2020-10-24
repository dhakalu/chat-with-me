import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #282828;
    color: #aaa;
    .chat-window-wrapper {
        display: flex;
        flex-direction: column;
        background: #282828;
        height: 100vh;
        width: 100vw;
        box-shadow: 0 0 20px 0 #121212;

        @media (min-width: 1020px) {
            width: 680px;
            border: 2px solid #282828;
        }

        .header {
            padding: 10px;
            border-bottom: 2px solid #282828;
            width: calc(100% - 20px);
            box-shadow: 0 0 30px -10px #121212;
            .header-title {
                font-size: 1.3em;
            }
        }

        .chat-content {
            display: flex;
            flex: 1;
            flex-direction: column;
            overflow: auto;
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
