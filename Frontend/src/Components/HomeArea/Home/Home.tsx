import DevTeamModel from "../../../Models/DevTeamModel";
import MeetingModel from "../../../Models/MeetingModel";
import scheduleService from "../../../Services/ScheduleService";
import "./Home.css";
import { ChangeEvent, useEffect, useState } from "react";

function Home(): JSX.Element {


    const [devTeam, setDevTeam] = useState<DevTeamModel[]>([]);
    const [meetings, setmeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        scheduleService.getAllDevTeams()
            .then(devTeam => setDevTeam(devTeam))
            .catch(err => alert(err.message));
    }, []);

    async function showAllMeetings(args: ChangeEvent<HTMLSelectElement>) { 
        const value = +args.target.value
        scheduleService.getMeetingsScheduleByDevTeam(value)
            .then(meetings => setmeetings(meetings))
            .catch(err => alert(err.message))
    }

return (
    <div className="Home">

    
             <label>Select Developers Team: </label>
            <select defaultValue="" onChange={showAllMeetings}>
                 <option disabled value="">Select...</option>
                 {devTeam.map(d =>
                     <option key={d.devTeamId} value={d.devTeamId}>
                         {d.devTeamName}
                     </option>
                )}
             </select> 

             <br />

             {meetings.map(m => 
                            <table>
                                <thead>
                                    <tr>
                                    <td>{m.devTeamName}</td>
                                    <td>{m.meetingRoom}</td>
                                    </tr>


                                </thead>
                                <tbody>

                                </tbody>
                            </table>
            )} 




        </div>
    );
}

export default Home;
