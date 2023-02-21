import MeetingsModel from "../../../Models/meetings-model";
import "./ProductCard.css";

interface ProductCardProps {
	meeting: MeetingsModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {   
    return (
        <div className="ProductCard">
			
        
            Start Date: {props.meeting.startDate} 
            <br />
            <br />

            End Date: {props.meeting.endDate} 
            <br />
            <br />

            Description: {props.meeting.meetingDescription}
            <br />
            <br />
            Meeting Room: {props.meeting.meetingRoom}


            <br />

        </div>
    );
}

export default ProductCard;
