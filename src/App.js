import logo from './logo.svg';
import './App.css';

import EmailSidebar from "./components/email-sidebar/email-sidebar.component";
import EmailDisplay from "./components/email-display/email-display.component";
import {useEffect, useState} from "react";
import axios from "axios";

const place_holder = {
    "id": "0",
    "from": "",
    "address": "",
    "time": "",
    "message": "Select an email to read the contents",
    "subject": "",
    "tag": "",
    "read": ""

}
function App() {
  let on_load = true
  const [emailList, setEmails] = useState([])
  const [displaydata, setDisplay] = useState(place_holder)

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios(
          'https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json'
      );
      setEmails(response.data);

    }
    fetchEmails()
  }, []);

    useEffect(() => {
        const id = displaydata.id
        console.log(id)
        for(let i = 0; i < emailList.length; i ++){
            if(id !== emailList[i].id){
                emailList[i].active = "false"
            }
        }
    }, [displaydata]);

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
