import {useState} from "react";
import {SingleUser} from "./components/SingleUser";
import css from './app.module.css'


import Users from "./components/Users/Users";
import {Posts} from "./components/Posts";

const App = () => {
    const [singleUser, setSingleUser] = useState(null)
    const [userId, setUserId] =useState(null)
  return (
      <div>
          <div className={css.userSinguser}>
              <Users getUser={setSingleUser} setUserId={setUserId} />
              {singleUser && <SingleUser user={singleUser} setUserId={setUserId} />}
          </div>
          <hr/>
          {userId && <Posts userId={userId}/>}
      </div>

  );
}

export default App;
