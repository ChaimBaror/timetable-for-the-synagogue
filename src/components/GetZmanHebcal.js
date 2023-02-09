import moment from "moment";
import { useGetzman } from "../hooks/useGetHebcal";

export const GetZmanHebcal = ({ name, zmanim }) => {
    const zeman = useGetzman(zmanim)
    return (
        <div>
            {name} {moment(new Date(zeman)).format(' HH:mm ')}
        </div >
    )
}
