import ActivityChart from "./ActivityChart/index.js"
import ActivityTable from "./ActivityTable/index.js"
import ActivityTotalBar from "./ActivityTotalBar/index.js"
import Top from "./Top/index.js"

function UserActivity(){
    return(
        <div className="mt-5 bg-primary p-[2rem] rounded-2xl w-full flex flex-col gap-4">
            <Top/>
            <ActivityChart/>
            <ActivityTotalBar/>
            <hr/>
            <ActivityTable/>
        </div>
    )
}

export default UserActivity