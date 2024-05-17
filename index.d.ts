/*
*   ANIMATIION
*/
// number.js
export function createNumber({ }: {
    svg: Element,
    x?: number,
    y?: number,
    textColour?: string,
    fontSize?: string,
    alignVertical?: 'auto' | 'middle'
}): Element

export function setNumberPosition(number: Element, x: number, y: number): null

export function numberChangeValue({ }: {
    number: Element,
    initial?: number,
    end: number,
    progress?: number,
    transitionDuration?: number,
    numberFormat?: Function
}): number

// text.js
export function createText({ }: {
    svg: Element,
    x?: number,
    y?: number,
    height: number,
    width: number,
    textColour?: string,
    fontSize?: string,
    alignVertical?: 'auto' | 'middle',
    alignHorizontal?: 'inherit' | 'middle',
    htmlText?: string
}): Element

export function hideText(textNode: Element, progress?: number): null

export function showText(textNode: Element, progress?: number): null

export function changeText(textNode: Element, htmlText: string): null

/*
*   AXIS
*/
export function adjustColours(g: Element, colour: string, hideDomain?: boolean): null

export function addAxis({ }: {
    chart: Element, height: number, width: number, colour?: string,
    x?: Function, xLabel?: string, xFormat?: Function, xTickValues?: Array, xNumTicks?: number, xNumTicksForceInitial?: boolean, hideXdomain?: boolean,
    y?: Function, yLabel?: string, yFormat?: Function, yTickValues?: Array, yNumTicks?: number, yNumTicksForceInitial?: boolean, hideYdomain?: boolean,
    yRight?: Function, yRightLabel?: string, yRightFormat?: Function, yRightTickValues?: Array, yRightNumTicks?: number, yRightNumTicksForceInitial?: boolean
}): null

export function updateXaxis({ }: {
    chart: Element,
    x: Function,
    format?: Function,
    tickValues?: Array
}): null

export function updateYaxis({ }: {
    chart: Element,
    y: Function,
    format?: Function,
    hideDomain?: boolean
}): null