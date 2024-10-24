import getSvgWidth from "../../../utils/functions/getSvgWidth";
import svgToDataUri from "../../../utils/functions/svgToDataUri";

const svgs = import.meta.glob('./sprites/*.svg', { as: 'raw' });

const loadDesks = async () => {
    const svgArray = [];

    for (const path in svgs) {
        const content = await svgs[path]();
        svgArray.push(content);
    }

    const character = svgArray.map(svg => ({ dataUri: svgToDataUri(svg), width: getSvgWidth(svg) }));

    return character
};

export default loadDesks;