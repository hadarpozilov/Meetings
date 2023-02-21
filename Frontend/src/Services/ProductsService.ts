import axios from "axios";
import DevGroupModel from "../Models/devGroup-model";
import MeetingsModel from "../Models/meetings-model";
import config from "../Utils/Config";

class MeetingService {

    public async getAllGroupDev(): Promise<DevGroupModel[]> {
        const response = await axios.get<DevGroupModel[]>(config.GroupUrl);
        const categories = response.data;
        return categories;
    }

    public async getMeetingByGroup(devId: number): Promise<MeetingsModel[]> {
        const response = await axios.get<MeetingsModel[]>(config.meetingByGroupUrl + devId);
        const products = response.data;
        return products;
    }

    public async addMeeting(meeting: MeetingsModel): Promise<MeetingsModel> {
        const response = await axios.post<MeetingsModel>(config.MeetingUrl, meeting);
        const addedProduct = response.data;
        return addedProduct;
    }
}

const meetingService = new MeetingService();

export default meetingService;
