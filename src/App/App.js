import user from "../user.json";
import data from "../data.json";
import Statistics from "components/statistics/Statistics";
import Profile from "../components/profile/Profile";
import { AppPosition } from "./App.styled";
import FriendsList from "components/friendslist/FriendList";
import friends from "../friends.json";
import TransactionHistory from "components/transaction-history/TransactionHistory";
import transactions from "../transactions.json";

function App() {
  return (
    <AppPosition>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={data.title} stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </AppPosition>
  );
}

export default App;
