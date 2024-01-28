import logo from './logo.svg';
import './App.css';

import EmailSidebar from "./components/email-sidebar/email-sidebar.component";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [emailList, setEmails] = useState([])

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios(
          'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json'
      );
      setEmails(response.data);
    }
    fetchEmails()
  }, []);

  return (
    <div className="App">
      <h1>Email Program</h1>
      <EmailSidebar emails={emailList}>
      </EmailSidebar>
    </div>
  );
}

export default App;
