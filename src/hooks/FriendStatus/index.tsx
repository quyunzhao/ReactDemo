import { useEffect, useState } from "react";
import { ChatAPI } from "../../api/ChatAPI";

export default function useFriendStatus({ friendID }: { friendID: string }) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status: any) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeFromFriendStatus(friendID, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);

      console.log("cleanup");
    };
  }, [friendID]);

  return isOnline;
}
