import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import productsService from "../../../Services/ProductsService";
import "./AddProduct.css";
import DevGroupModel from "../../../Models/devGroup-model";
import MeetingsModel from "../../../Models/meetings-model";
import meetingService from "../../../Services/ProductsService";

function AddProduct(): JSX.Element {

    const [group, setGroup] = useState<DevGroupModel[]>([]);
    const { register, handleSubmit } = useForm<MeetingsModel>();
    const navigate = useNavigate();

    useEffect(()=>{
        meetingService.getAllGroupDev()
        .then(group => setGroup(group))
        .catch(err => alert(err.message));
        },[]) ;

    function send(meeting: MeetingsModel) {
        productsService.addMeeting(meeting)
            .then(addedMeeting => {
                alert("group Added. ID: " + addedMeeting.devId);
                navigate("/group/new");
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className="AddProduct">

            <h2>Add Meeting: </h2>

            <form onSubmit={handleSubmit(send)}>

                <label> Name: </label>
                <input type="text" {...register("name")} required />

                <label>Start Date: </label>
                <input type="datetime-local" {...register("startDate")} required />

                <label>End Date: </label>
                <input type="datetime-local" {...register("endDate", { onChange: () => alert("Test") })} required />

                <label>meeting Description: </label>
                <input type="text" {...register("meetingDescription", { onChange: () => alert("Test") })} required />
               
                <label>meeting Room: </label>
                <input type="text" {...register("meetingRoom", { onChange: () => alert("Test") })} required />

                <label>Group: </label>
                <select defaultValue="0">
                <option disabled value="0"></option>
                {group.map(c => <option key={c.devId} value={c.devId}>{c.name}</option>)}
            </select>

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddProduct;
