import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  TransactionConfirmation,
  NewTransaction,
  TransactionsHistory,
  ClosedSession,
  MainPage,
} from "./views/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/clossed-session" element={<ClosedSession/>}>
        </Route>
        <Route path="/transaction-history" element={<TransactionsHistory/>}>
        </Route>
        <Route path="/transaction-confirmation" element={<TransactionConfirmation/>}>
        </Route>
        <Route path="/new-transaction" element={<NewTransaction/>}>
        </Route>
        <Route path="/home" element={<MainPage/>}>
        </Route>
        <Route path="/" element={<Login/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
