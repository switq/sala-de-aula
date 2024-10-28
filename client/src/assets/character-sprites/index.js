import getSvgHeight from "../../utils/functions/getSvgHeight";
import getSvgWidth from "../../utils/functions/getSvgWidth";
import svgToDataUri from "../../utils/functions/svgToDataUri";

const svgs = import.meta.glob('./sprites/*.svg', { as: 'raw' });

const loadCharacters = async () => {
    const svgArray = [];

    for (const path in svgs) {
        const content = await svgs[path]();

        const name = path.split('/').pop().replace('.svg', '');

        svgArray.push({ content, name });
    }

    const characters = svgArray.map(({ content, name }) => ({
        dataUri: svgToDataUri(content),
        width: getSvgWidth(content),
        height: getSvgHeight(content),
        name: name,
    }));

    return characters;
};

export default loadCharacters;
