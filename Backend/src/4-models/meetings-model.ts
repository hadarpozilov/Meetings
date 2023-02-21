class MeetingsModel {

    public meetingsId : number;
    public devId : string;
    public startDate: string;
    public endDate: string;
    public meetingDescription: string;
    public meetingRoom: string;
    public name: string;


    public constructor(meeting: MeetingsModel) {
        this.meetingsId = meeting.meetingsId;
        this.devId  = meeting.devId ;
        this.startDate = meeting.startDate;
        this.endDate = meeting.endDate;
        this.meetingDescription = meeting.meetingDescription;
        this.meetingRoom = meeting.meetingRoom;
        this.name = meeting.name;
    }

}

export default MeetingsModel;