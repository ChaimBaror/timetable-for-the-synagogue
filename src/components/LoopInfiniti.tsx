import { GetZman } from "./GetZman"
import '../styles/loop.scss'
import FromKosherZmanim from "../hooks/useFromKosherZmanim"
import moment from "moment"
import { list_zmanim } from "../utils/module"

export const LoopInfiniti = () => {
    return (
        <>
            <div className="bodydiv1">
                <div className="div-div">
                    <div className="ploop">
                        {/* {list_zmanim.map(({ name, zmanim }) => (<span>{name} {moment(new Date(FromKosherZmanim(zmanim))).format(' HH:mm ')}&bull;  </span>))} */}
                        &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} />  &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} /> &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} /> &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} /> &bull;

                    </div>
                </div>
            </div>
            {/* <div className="marquee-section">
                    <div className="marquee-div div">
                        <div className="marquee loop p">
                        &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} />  &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} /> &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} /> &bull; <GetZman name={'שקיעה'} zmanim={'Sunset'} key={"SunsetDesktopHeaderProps"} /> &bull;</div>
                    </div>
                </div> */}
            {/* <div className="loop ">
                <div className="bg-marquee"></div>
            </div> */}
        </>

    )
}