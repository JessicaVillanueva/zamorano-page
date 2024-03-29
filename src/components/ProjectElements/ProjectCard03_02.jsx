import React, { useLayoutEffect, useRef, useState } from "react";

const ProjectCard3_2 = ({ data }) => {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const monitorWidth = windowSize.current[0];

    // console.log(monitorWidth);


    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    let elHeight = Number(dimensions.height);
    // console.log(typeof elHeight);

    const { img, details, tag } = data;

    return (
        <div className={`grid-item ${tag}`}>
            <div className="thumb">
                {/* 
                <LazyLoad height={monitorWidth <= 600 ? 210 : monitorWidth <= 1550 ? 210 : monitorWidth <= 2000 ? 300 : 210} once>
                </LazyLoad>
                */}
                <img className="item_image" src={img} alt="" />
                <div className="works-info">
                    <div className="label-text">
                        <h5><a href="/project-details">{details}</a></h5>
                        <h6><a href="#">Club House</a>,<a href="#">Interior</a></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard3_2;