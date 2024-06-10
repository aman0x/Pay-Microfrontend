import { useSelector,useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice";
export function HomePage (){
    const counter = useSelector(state=> state.auth.counter)
   const dispatch = useDispatch()
    return(
        <div>
       <h1>Dashboard!!</h1>
       <h1 >Counter Value = {counter}</h1>
       <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>{dispatch(authActions.increaseCounter())}}>Increase +</button>
        </div>
    )
}