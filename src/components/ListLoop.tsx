import moment from 'moment'
import FromKosherZmanim from '../hooks/useFromKosherZmanim'
import '../styles/loop.scss'
import { list_zmanim } from '../utils/module'
import { GetDat } from './GetDay'
import { GetZman } from './GetZman'

export const ListLoop = () => {
    return (
        <>
            <div className="bodydiv">
                <div className="div-div">
                    <div>
                        <p className="p">
                            <b className="b">לוח זמנים <div className="p">
                                <GetDat type={'getDay'} />
                                <GetDat type={'getSedra'} />
                                <GetDat type={'dafyomi'} />
                            </div> <code>        <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} />
                                </code></b>
                            {list_zmanim.map(({ name, zmanim }) => (
                                <> &bull; {name} : {moment(FromKosherZmanim(zmanim)).format(' HH:mm ')} &bull; </>)
                            )}

                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}