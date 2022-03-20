import useFriendStatus from "../../hooks/FriendStatus";

export default function FriendStatus({ friend }: any) {
  const isOnline = useFriendStatus({ friendID: friend.id });

  if (isOnline === null) {
    return <div>Loading...</div>;
  }
  return isOnline ? <div>Online</div> : <div>Offline</div>;
}
