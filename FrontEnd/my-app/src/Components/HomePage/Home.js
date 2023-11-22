import { Fragment, useCallback, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import NavigationBar from "../NavBar/NavigationBar";
import styles from "./Home.module.css";
import NewExpenseForm from "./NewExpenseForm";

import axios from "axios";

const Home = () => {
  const [expenseList, setExpenses] = useState([]);

  const fetchExpenses = useCallback(() => {
    axios("http://localhost:4000/home/getExpenses")
      .then((res) => setExpenses(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return (
    <Fragment>
      <div>
        <NavigationBar />
        <div className={styles["main-div"]}>
          <h1 className="py-4 px-2">Welcome to Expense Tracker</h1>
        </div>

        <NewExpenseForm fetchExpenses={fetchExpenses} />

        <div align="center" className={`pb-5 ${styles.expenseDiv}`}>
          {expenseList.length > 0 && (
            <ul className="p-0">
              {expenseList.map((item) => (
                <ExpenseItem
                  key={item.id}
                  id={item.id}
                  expense={item.expense}
                  description={item.description}
                  category={item.category}
                  fetchExpenses={fetchExpenses}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
