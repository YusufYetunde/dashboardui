import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";
import Chart from "../ChartTracking/Chart";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-chart">
        <Chart/>
      </div>
        <div className="content-grid-one">
            <Cards />
            <Report />
            <Savings />
        </div>
        <div className="content-grid-two">
            <Budget />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
                <Transactions />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <Loans />
                <Financial />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
