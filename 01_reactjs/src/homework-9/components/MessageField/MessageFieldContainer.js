import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function MessageFieldContainer() {
    const { chatId } = useParams();
  
    const chats = useSelector(getChatList);
    const messageList = useSelector((state) => state.messages.messages);
    const messages = messageList[chatId];
    const dispatch = useDispatch();
  
    const onAddMessage = useCallback(
      (message) => {
        dispatch(
          addMessageWithFirebase(chatId, {
            ...message,
            id: `${chatId}-${messages?.length || 0}-${Date.now()}`,
          })
        );
  
      },
      [chatId]
    );
  
    useEffect(() => {
      dispatch(initMessageTracking());
    }, []);
  
    return (
       <p></p>
    );
  }