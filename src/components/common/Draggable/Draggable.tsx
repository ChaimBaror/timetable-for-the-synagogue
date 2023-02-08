import { log } from "console";
import React, { Children, useEffect, useState } from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";

type Props = {
    width?: any,
    height?: any,
    x?: any,
    y?: any,
    children: JSX.Element,

};

// const style = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     border: "solid 1px #ddd",
//     background: "#f0f0f0"
// };

const Draggable: React.FC<Props> = ({ width, height, x = 10, y = 10, children }) => {
    const [size, setSize] = useState({ width: width, height: height });
    const [position, setPosition] = useState({ x: x, y: y });

    useEffect(() => {
        console.log(size, position);

    }, [size, position])



    return (
        <Rnd
            // style={style}
            dragGrid={[1, 1]}
            resizeGrid={[1, 1]}
            size={{ width: size.width, height: size.height }}
            position={{ x: position.x, y: position.y }}
            onDragStop={(e, d) => {
                setPosition({ ...position, x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setSize({
                    ...size,
                    width: +ref.style.width,
                    height: +ref.style.height,
                    ...position
                });
            }}
        >
            {children}
        </Rnd>

    )

}
export default Draggable;