export const ChatAPI = {
  subscribeFromFriendStatus(id: string, cb: any) {
    const isOnline = true;
    cb({
      isOnline,
    });
  },
  unsubscribeFromFriendStatus(id: string, cb: any) {
    const isOnline = true;
    cb({
      isOnline,
    });
  },
};
