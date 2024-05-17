// animation/number.js
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




export function adjustColours(g: any, colour: string, hideDomain: boolean): null;