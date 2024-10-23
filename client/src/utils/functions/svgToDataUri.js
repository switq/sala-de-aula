const svgToDataUri = (svgContent) => {
    const base64Svg = btoa(unescape(encodeURIComponent(svgContent)));
    return `data:image/svg+xml;base64,${base64Svg}`;
};

export default svgToDataUri;