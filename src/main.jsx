import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)



ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // <React.StrictMode>
  // </React.StrictMode>,
)
