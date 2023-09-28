import { Provider } from "react-redux";
import store  from "./utils/store";
import Head from "./component/Head";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./component/Maincontainer";
import Watchpage from "./component/Watchpage";
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<Maincontainer/>
  },{
    path:"watch",
    element:<Watchpage/>
  }]
}])
function App() {
  return (
    <Provider store={store}>
   <div className=" ">
  <Head/>
 <RouterProvider router={appRouter}/>
    </div>
    </Provider>
 
  );
}
{
  
}
export default App;
