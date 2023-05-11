class MeetingModel {
    
    public meetingId: number;
    public devTeamId: number;
    public meetingStartingDate: Date;
    public meetingEndingDate: Date;
    public meetingDescription: string;
    public meetingRoom: string;


    public constructor(meeting: MeetingModel) {
        this.meetingId = meeting.meetingId;
        this.devTeamId = meeting.devTeamId;
        this.meetingStartingDate = meeting.meetingStartingDate;
        this.meetingEndingDate = meeting.meetingEndingDate;
        this.meetingDescription = meeting.meetingDescription;
        this.meetingRoom = meeting.meetingRoom;
    }

}

export default MeetingModel;
