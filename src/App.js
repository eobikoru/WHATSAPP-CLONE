import "./App.css";
import Chart from "./component/Chart";
import SideBar from "./component/SideBar";
import Pusher from 'pusher-js'
import  {useEffect , useState } from 'react';
import instance from "./axios"
function App() {
const [ messages , setMessages ] = useState([]);


useEffect(()=>{

async function fetchUsersData() {
  const request = await instance(`/messages/sync`);

 setMessages(request.data)
}
fetchUsersData();
  },[]);


  useEffect(() => {
   
    const pusher = new Pusher('914c2e2f8854758a191f', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages , data])
    });
return () => {
  channel.unbind_all();
  channel.unsubscribe()
}

  }, [messages]);
  console.log(messages);
 
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chart messages={messages} />
      </div>
    </div>
  );
}

export default App;
