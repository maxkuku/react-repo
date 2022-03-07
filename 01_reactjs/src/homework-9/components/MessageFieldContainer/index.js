import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback } from "react";


export default function MessageFieldContainer() {
    const { chatId } = useParams();
  
    const [messages, setMessages] = useState([]);
  
    const onAddMessage = useCallback(
      (message) => {
        firebase.database()
           .ref("messages")
           .child(chatId)
           .child(message.id)
           .set(message);
      },
      [chatId]
    );
  
    useEffect(() => {
      firebase.database().ref("messages").child(chatId).on("value", (snapshot) => {
        const newMessages = [];
  
        snapshot.forEach(entry => {
          messages.push(entry.val());
        });
  
        setMessages(newMessages);
      });
    }, []);
  
  
    if (!chatId) {
      return (
        <>
          <ChatList chats={chats} chatId={null} onAddChat={() => {}} />
        </>
      );
    }
  
    if (!chats[chatId]) {
      return <Redirect to="/nochat" />;
    }
  
    return (
      <>
        <header>Header</header>
        <div className="wrapper">
          <div>
            <ChatList chatId={chatId} />
          </div>
          <div>
            <MessagesList messages={messages} />
            <Input onAddMessage={onAddMessage} />
          </div>
        </div>
      </>
    );
  }