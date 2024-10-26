import getSvgWidth from "../../utils/functions/getSvgWidth";
import svgToDataUri from "../../utils/functions/svgToDataUri";

const svgs = import.meta.glob('./sprites/*.svg', { as: 'raw' });

const loadEmojis = async () => {
    const svgArray = [];

    for (const path in svgs) {
        const content = await svgs[path]();
        svgArray.push({ content, name: path.split('/').pop().replace('.svg', '') });
    }

    const characters = svgArray.map(svg => ({
        dataUri: svgToDataUri(svg.content),
        name: `:${svg.name}:`
    }));

    return characters;
};

export default loadEmojis;
