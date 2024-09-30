import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className={styles.wraper}>
      {/* dashboard main contents */}
      <div className={styles.main}>
        {/* dashboard cards session */}
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        {/* dashboard chart and transactions */}
        <Transactions />
        <Chart />
      </div>

      {/* dashboard right bar, next to main contents */}
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
