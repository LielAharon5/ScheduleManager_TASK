import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import DevTeamModel from "../4-models/dev-team-model";
import MeetingModel from "../4-models/meeting-model";

async function getAllDevTeams(): Promise<DevTeamModel[]> {
    const sql = "SELECT * FROM devteams";
    const devTeams = await dal.execute(sql);
    return devTeams;
}
async function getAllSchedule(): Promise<DevTeamModel[]> {
    const sql = "SELECT * FROM meetingschedule";
    const schedule = await dal.execute(sql);
    return schedule;
}
async function getMeetingsScheduleByDevTeam(devTeamId: number): Promise<DevTeamModel[]> {

    const sql = `
            SELECT Ms.*, Dt.devTeamName
            FROM meetingschedule AS Ms JOIN devteams AS Dt
            ON Ms.devTeamId = Dt.devTeamId
            WHERE Ms.devTeamId = ${devTeamId}`;

    const meetingsSchedule = await dal.execute(sql);

    return meetingsSchedule;
}

async function addNewMeeting(meeting: MeetingModel): Promise<MeetingModel> {
    const sql = `
        INSERT INTO meetingschedule VALUES(
            DEFAULT,
            '${meeting.devTeamId}',
            '${meeting.meetingStartingDate}',
            '${meeting.meetingEndingDate}',
            '${meeting.meetingDescription}',
            '${meeting.meetingRoom}'
        )`;

    const info: OkPacket = await dal.execute(sql);

    meeting.meetingId = info.insertId;
    
    return meeting;
}



export default {
    getAllDevTeams,
    getAllSchedule,
    getMeetingsScheduleByDevTeam,
    addNewMeeting,
};
