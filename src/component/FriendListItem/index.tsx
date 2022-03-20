import useFriendStatus from "../../hooks/FriendStatus";

export default function FriendListItem(props: any) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
