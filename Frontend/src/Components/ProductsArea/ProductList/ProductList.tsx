import { SyntheticEvent, useEffect, useState } from "react";
import DevGroupModel from "../../../Models/devGroup-model";
import MeetingsModel from "../../../Models/meetings-model";
import meetingService from "../../../Services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

const [group, setGroup] = useState<DevGroupModel[]>([]);
const [meeting, setMeeting] = useState<MeetingsModel[]>([]);
useEffect(()=>{
meetingService.getAllGroupDev()
.then(group => setGroup(group))
.catch(err => alert(err.message));
},[]) ;

 function displayMeeting(args: SyntheticEvent) {
    const select = args.target as HTMLSelectElement;
    const meeting = +select.value;
    meetingService.getMeetingByGroup(meeting)
        .then(meeting => setMeeting(meeting))
        .catch(err => alert(err.message));
}


    return (
        <div className="ProductList">

            <label>Select Name: </label>
            <select defaultValue="0" onChange={displayMeeting}>
                <option disabled value="0"></option>
                {group.map(c => <option key={c.devId} value={c.devId}>{c.name}</option>)}
            </select>

            <br />
            {meeting.map(p => <ProductCard key={p.meetingsId} meeting={p} />)}

            <br />


        </div>
    );
}

export default ProductList;
