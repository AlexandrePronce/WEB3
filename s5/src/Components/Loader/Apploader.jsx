
import { ProviderWrapper as VoteProviderWrapper } from "../../contexts/VoteContext";
import App from "../../App";
const AppLoader= () => {
    return (
      <VoteProviderWrapper >
          <App/>
   
        </VoteProviderWrapper >
    )
  }
  export default AppLoader ;