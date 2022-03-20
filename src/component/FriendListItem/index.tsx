import useFriendStatus from "../../hooks/FriendStatus";

export default function FriendListItem({ friend }: any) {
  const isOnline = useFriendStatus({ friendID: friend.id });

  return <li style={{ color: isOnline ? "green" : "gray" }}>{friend.name}</li>;
}
