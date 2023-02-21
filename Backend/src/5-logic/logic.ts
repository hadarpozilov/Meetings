import { OkPacket } from "mysql";
import dal from "../2-utils/dal"
import DevGroupModel from "../4-models/devGroup-model";
import MeetingsModel from "../4-models/meetings-model";

async function getAllGroupDev(): Promise<DevGroupModel[]> {
    const sql = "SELECT * FROM devgroup";
    const group = await dal.execute(sql);
    return group;
}

async function getMeetingByGroup(devId: number): Promise<MeetingsModel[]> {
    const sql = "SELECT * FROM meetings WHERE devId  = " + devId;
    const meeting = await dal.execute(sql);
    return meeting;
}

async function addMeeting(meeting: MeetingsModel): Promise<MeetingsModel> {
    const sql = "INSERT INTO meetings VALUES(DEFAULT, ?, ?, ?, ?, ?,?)";
    const values = [meeting.name, meeting.startDate,meeting.endDate ,meeting.devId, meeting.meetingDescription, meeting.meetingRoom];
    const result: OkPacket = await dal.execute(sql, values);
    meeting.meetingsId = result.insertId;
    return meeting;
}


export default {
    getAllGroupDev,
    getMeetingByGroup,
    addMeeting
};

