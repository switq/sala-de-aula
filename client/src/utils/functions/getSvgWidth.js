function getSvgWidth(svgString) {
    // Usar DOMParser para converter a string SVG em um documento XML
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');

    // Encontrar o elemento <svg>
    const svgElement = svgDoc.querySelector('svg');

    // Tentar obter o atributo 'width'
    let width = svgElement.getAttribute('width');

    // Se não houver atributo 'width', calcular a partir do 'viewBox'
    if (!width) {
        const viewBox = svgElement.getAttribute('viewBox');
        if (viewBox) {
            const viewBoxValues = viewBox.split(' ');
            width = viewBoxValues[2]; // O terceiro valor é a largura
        } else {
            throw new Error('Não foi possível encontrar a largura ou viewBox no SVG.');
        }
    }

    return width;
}

export default getSvgWidth;