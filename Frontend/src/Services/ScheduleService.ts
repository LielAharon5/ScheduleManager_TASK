import axios from "axios";
import appConfig from "../Utils/Config";
import DevTeamModel from "../Models/DevTeamModel";
import MeetingModel from "../Models/MeetingModel";

class ScheduleService {

    public async getAllDevTeams(): Promise<DevTeamModel[]> {
        const response = await axios.get<DevTeamModel[]>(appConfig.devTeamsUrl);
        const devTeams = response.data;
        return devTeams;
    }

    public async getMeetingsScheduleByDevTeam(devTeamId: number): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(appConfig.schedulePerDevTeamUrl + devTeamId);
        const meetingsSchedule = response.data;
        return meetingsSchedule;
    }

    public async addNewMeeting(meeting: MeetingModel): Promise<void> {
        await axios.post<MeetingModel>(appConfig.schedulePerDevTeamUrl, meeting);
    }

}

const scheduleService = new ScheduleService();

export default scheduleService