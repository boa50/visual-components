export const createText = ({
    svg,
    x = 0,
    y = 0,
    height,
    width,
    textColour = 'black',
    fontSize = '1rem',
    alignVertical = 'auto',
    alignHorizontal = 'inherit',
    htmlText = ''
}) => {
    return svg
        .append('foreignObject')
        .attr('width', width ? width : '100%')
        .attr('height', height ? height : '100%')
        .attr('x', x)
        .attr('y', y)
        .call(g => g
            .append('xhtml:div')
            .attr('class', 'el-text')
            .style('width', width ? width : '100%')
            .style('height', height ? height : '100%')
            .style('color', textColour)
            .style('font-size', fontSize)
            .style('display', 'flex')
            .style('flex-direction', 'column')
            .style('justify-content', 'center')
            .style('align-items', alignVertical)
            .style('text-align', alignHorizontal)
            .html(htmlText)
        )
}

export const hideText = (textNode, progress = 1) => {
    textNode.select('div').style('opacity', 1 - progress)
}

export const hideTextTransition = (textNode, duration = 500, transitionName = '') => {
    return textNode
        .select('div')
        .style('opacity', 1)
        .transition(transitionName)
        .duration(duration)
        .style('opacity', 0)
}

export const showText = (textNode, progress = 1) => {
    textNode.select('div').style('opacity', progress)
}

export const showTextTransition = (textNode, duration = 500, transitionName = '') => {
    return textNode
        .select('div')
        .style('opacity', 0)
        .transition(transitionName)
        .duration(duration)
        .style('opacity', 1)
}

export const changeText = (textNode, htmlText) => {
    textNode.select('div').html(htmlText)
}

export const changeTextTransition = (textNode, htmlText, duration = 500, transitionName = '') => {
    hideTextTransition(textNode, duration / 2, transitionName)
        .on('end', () => {
            changeText(textNode, htmlText)
            showTextTransition(textNode, duration / 2, transitionName)
        })
}