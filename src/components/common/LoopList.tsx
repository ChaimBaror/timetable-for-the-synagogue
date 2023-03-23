import React from 'react'
import "../../styles/loop.scss";

export const LoopList = () => {

    const footertext = [
        'הלימוד והתפילות לע"נ יצחק מנדל בן ר אהרון ',
        ' הברכות להצלחת חיים מרדכי בן ר יוסף',
        ' הלימוד לרפואת אילן ישי בן שושנה']


    // const footertext = 'הלימוד והתפילות לע"נ יצחק מנדל בן ר אהרון * הברכות להצלחת חיים מרדכי בן ר יוסף  * הלימוד לרפואת אילן ישי בן שושנה'

    return (

        <section className="container">
            {footertext.map(item => (
                <div>
                    <div className="list">
                        <div className="item">
                            <span className="item-txt">{item}</span> &bull;
                        </div>
                    </div>
                </div>
            ))}
            {footertext.map(item => (
                <div>
                    <div className="list">
                        <div className="item">
                            <span className="item-txt">{item}</span> &bull;
                        </div>
                    </div>
                </div>
            ))}
        </section>
        // <div>
        //     <div className="marquee-section">
        //         <div className="marquee-div">
        //             <div className="marquee loop">
        //                 {footertext.map(i => (
        //                     <span>  &bull; {i}  </span>

        //                 ))}
        //                   {footertext.map(i => (
        //                     <span>  &bull; {i}  </span>

        //                 ))}
        //             </div>

        //         </div>

        //     </div>
        // </div>

    )
}
