import Counter from "../component/Counter";
import Example from "../component/Example";
import FriendListItem from "../component/FriendListItem";
import FriendStatus from "../component/FriendStatus";

export default function App() {
  return (
    <div>
      <Example />
      <FriendStatus friend={{ id: "1", name: "张三" }} />
      <FriendListItem friend={{ id: "2", name: "李四" }} />
      <Counter />
    </div>
  );
}
