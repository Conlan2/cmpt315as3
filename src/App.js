import logo from './logo.svg';
import './App.css';

import EmailSidebar from "./components/email-sidebar/email-sidebar.component";
import EmailDisplay from "./components/email-display/email-display.component";
import {useEffect, useState} from "react";
import axios from "axios";

// Empty Placeholder for the email display before any are selected
const place_holder = {
    "id": "0",
    "from": "Select an email to read the contents",
    "address": "",
    "time": "",
    "message": "",
    "subject": "",
    "tag": "",
    "read": ""

}
function App() {
    const [emailList, setEmails] = useState([])
  const [displaydata, setDisplay] = useState(place_holder)

    //Retrieves emails from gist
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
        <div className="email_main">
            <EmailSidebar emails={emailList} set_displayed={setDisplay}>
            </EmailSidebar>
            <EmailDisplay email_content={displaydata}>

            </EmailDisplay>
        </div>

    </div>
  );
}

export default App;
