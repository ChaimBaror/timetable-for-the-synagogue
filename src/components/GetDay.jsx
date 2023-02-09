import { HebrewDateFormatter } from "kosher-zmanim"
import { useGetzman } from "../hooks/useGetHebcal"

export const GetDat = ({ type = "getDay" }) => {
    const dafyomi = useGetzman('', "dafyomi")
    const getDay = useGetzman('', "getDay")
    const toStringDay = useGetzman('', "toStringDay")
    const getSedra = useGetzman('', "getSedra")


    if (type == "dafyomi") {
        return (
            <div >
                דף יומי: {dafyomi}
            </div>
        )
    }

    if (type == "getSedra") {
        return (
            <div>
                פרשת {getSedra}
            </div>
        )
    }

    return (
        <>
            יום {HebrewDateFormatter.hebrewDaysOfWeek[getDay]} {toStringDay}
        </>
    )

}