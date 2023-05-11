import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AddMeeting.css";
import DevTeamModel from "../../../Models/DevTeamModel";
import MeetingModel from "../../../Models/MeetingModel";
import scheduleService from "../../../Services/ScheduleService";

function AddMeeting(): JSX.Element {

    const navigate = useNavigate();

    const [devTeam, setDevTeam] = useState<DevTeamModel[]>([]);

    const { register, handleSubmit } = useForm<MeetingModel>();

    useEffect(() => {
        scheduleService.getAllDevTeams()
            .then(devTeam => setDevTeam(devTeam))
            .catch(err => alert(err.message));
    }, []);

    async function send(meeting: MeetingModel) {
        try {
            await scheduleService.addNewMeeting(meeting);
            alert("New Meeting added");
            navigate("/meetings");
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddMeeting">

            <form onSubmit={handleSubmit(send)}>

                <label>Select developers team: </label>
                <select defaultValue="" {...register("devTeamId")} required>
                    <option disabled value="">Select...</option>
                    {devTeam.map(d =>
                        <option key={d.devTeamId} value={d.devTeamId}>
                            {d.devTeamName}
                        </option>
                    )}
                </select>


                <label>Meeting Starting Date: </label>
                <input type="date" {...register("meetingStartingDate")} required/>

                <label>Meeting Ending Date: </label>
                <input type="date"  {...register("meetingEndingDate")}  />

                <label>Description: </label>
                <input type="text" {...register("MeetingDescription")}  />

                <label>Meeting Room: </label>
                <input type="text" {...register("meetingRoom")}  />

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddMeeting;
