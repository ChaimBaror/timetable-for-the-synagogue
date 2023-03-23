import { hebcal_list } from '../utils/module';
import moment from "moment";
import ItemList from './common/list/ItemList';
import { useSelector } from 'react-redux';
import { useGetzman as Getzman } from '../hooks/useGetHebcal';

export const HebcalZmanimList = () => {

    const { location } = useSelector(state => state)
    const city = location.name;

    return (
        <div className='continer'>
            <div className='list_of_zmanim'>
                <h1 className='date_information'>זמני היום {city}</h1>
                {hebcal_list.map(({ name, zmanim }) => (
                    <ItemList key={name} name={`${name}:`} zmanim={moment(new Date(Getzman(zmanim))).format(' HH:mm:ss ')} />)
                )}
            </div>
        </div >)
}
