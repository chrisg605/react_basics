import Add from "./component/Add";
import Greet from "./component/Greet"
import MainContent from "./component/MainContent"
import Header from "./component/Header";
import ProductInfo from "./component/Product";
import Footer from "./component/Footer";
import WelcomeMessage from "./component/WelcomeMessage"
import Person from "./component/Person";
import UserList from "./component/userList";

function App() {
  return <div>
    <Person age={19} name="Chris" />
    <ProductInfo name="PC" price={499} />
  </div>
}
function User(props) {
  
  return <section>{props.name}</section>;
}

export default App;