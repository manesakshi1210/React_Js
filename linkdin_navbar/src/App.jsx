import React, { useEffect, useState } from 'react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  useEffect(() => {
    console.log('You have clicked on tab called as:', currentTab);
  }, [currentTab]);

  const getPara = () => {
  switch(currentTab) {
    case 'Home': return 'This is Home Page';
    case 'MyNetwork': return 'This is MyNetwork Page';
    case 'Jobs': return 'This is Jobs Page';
    case 'Messaging': return 'This is Messaging Page';
    case 'Notifications': return 'This is Notifications Page';
    default: return '';
  }
};

  function HomeFunction() {
    setCurrentTab('Home');
  }

  function MyNetworkFunction() {
    setCurrentTab('MyNetwork');
  }

  function JobsFunction() {
    setCurrentTab('Jobs');
  }
  
  function MessagingFunction() {
    setCurrentTab('Messaging');
  }

  function NotificationsFunction() {
    setCurrentTab('Notifications');
  }
  
  return (
    <div>
      {/* <h1>LinkedIn Navbar </h1> */}

      <button
       onClick={HomeFunction}
        style={{ color: currentTab === "Home" ? "red" : "black" }}
      >
        LinkedIn 
      </button>

      <button
        onClick={MyNetworkFunction}
        style={{ color: currentTab === "MyNetwork" ? "red" : "black" }}
      >
        MyNetwork
      </button>

      <button
        onClick={JobsFunction}
        style={{ color: currentTab === "Jobs" ? "red" : "black" }}
      >
        Jobs
      </button>

      <button
        onClick={MessagingFunction}
        style={{ color: currentTab === "Messaging" ? "red" : "black" }}
      >
        Messaging
      </button>

      <button
        onClick={NotificationsFunction}
        style={{ color: currentTab === "Notifications" ? "red" : "black" }}
      >
        Notifications
      </button>

      <hr />
      <h2>{currentTab}</h2>
      <h3>{getPara()}</h3>
    </div>
  );
}