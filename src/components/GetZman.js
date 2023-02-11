import moment from "moment";
import useFromKosherZmanim from "../hooks/useFromKosherZmanim";
import { useGetzman } from "../hooks/useGetHebcal";

export const GetZman = ({ name, zmanim }) => {
    const zeman = useGetzman(zmanim)
    const KosherZmanim = useFromKosherZmanim(zmanim)

    return (
        <div>
            {name} {moment(new Date(KosherZmanim)).format(' HH:mm ')}
        </div>
    )
}
