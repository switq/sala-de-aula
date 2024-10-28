function getSvgHeight(svgString) {
    // Usar DOMParser para converter a string SVG em um documento XML
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');

    // Encontrar o elemento <svg>
    const svgElement = svgDoc.querySelector('svg');

    // Tentar obter o atributo 'height'
    let height = svgElement.getAttribute('height');

    // Se não houver atributo 'height', calcular a partir do 'viewBox'
    if (!height) {
        const viewBox = svgElement.getAttribute('viewBox');
        if (viewBox) {
            const viewBoxValues = viewBox.split(' ');
            height = viewBoxValues[3]; // O quarto valor é a altura
        } else {
            throw new Error('Não foi possível encontrar a altura ou viewBox no SVG.');
        }
    }

    return height;
}

export default getSvgHeight;
