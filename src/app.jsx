import Nav from "./components/nav.jsx"
import Main from "./components/main.jsx"

export default function App() {
    return(
// since we have 2 siblings we are trying to reneder we will always have a opening <> and closing </>
        <>
            <div id="d1">              
                <Nav />
            </div>
            <div id="d2">
                <Main />
            </div>
        </>
    )   
}
