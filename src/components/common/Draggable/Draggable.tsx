import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import * as S from './Draggable.style'
type Props = {
    width?: any,
    height?: any,
    x?: any,
    y?: any,
    className?: string,
    children: JSX.Element,
};

// const style = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     border: "solid 1px #ddd",
//     background: "#f0f0f0"
// };

const Draggable: React.FC<Props> = ({ width, height='auto', x = 10, y = 10, children, className }) => {
    const [size, setSize] = useState({ width: width, height: height });
    const [position, setPosition] = useState({ x: x, y: y });

    // useEffect(() => {
    //     console.log("size : ",size);
    //     console.log("position : ",position);

    // }, [size, position])



    return (
        <S.Wrapper>
            <Rnd
                // style={style}
                className={`${className} divdnd`}
                dragGrid={[6, 6]}
                resizeGrid={[3, 3]}
                size={{ width: size.width, height: size.height }}
                position={{ x: position.x, y: position.y }}
                onDragStop={(e, d) => {
                    setPosition({ ...position, x: d.x, y: d.y });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setSize({
                        ...size,
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                }}>
                <>
                    {children}
                </>
            </Rnd>
        </S.Wrapper>

    )

}
export default Draggable;