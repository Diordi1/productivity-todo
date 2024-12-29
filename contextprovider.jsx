import todocontext from "./todocontext";
let ContextProvider=({children})=>{
    let [todos,settodos]=useState([]);
    return <todocontext.Provider value={{todos,settodos}}>
{children}
    </todocontext.Provider>
}
export default ContextProvider;