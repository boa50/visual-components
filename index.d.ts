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