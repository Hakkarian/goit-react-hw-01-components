import user from "jsons/user.json";
import data from "jsons/data.json";
import friends from "jsons/friends.json";
import trans from 'jsons/transactions.json';
import ProfileCard from "components/ProfileCard";
import StatsCard from "components/StatsCard";
import FriendsList from "components/FriendsList";
import TransactionTable from "components/TransactionTable";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={`${css} ${css.flex}`}>
      <ProfileCard
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatsCard title="Upload stats" items={data} />
      <FriendsList items={friends} />
      <TransactionTable items={trans} />
    </div>
  );
};

export default App;