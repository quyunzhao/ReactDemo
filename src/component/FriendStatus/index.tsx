import useFriendStatus from "../../hooks/FriendStatus";

export default function FriendStatus(props: any) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
