import user from "path/to/user.json";
import data from "path/to/data.json";
import friends from "path/to/friends.json";
import transactions from "path/to/transactions.json";
import Profile from "components/Profile";
import Statistics from "components/Statistics";
import FriendsList from "components/FriendsList";
import TransactionHistory from "components/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
