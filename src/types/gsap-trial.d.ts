declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(soft?: boolean): void;
    scrollTop(value?: number): number | void;
    paused(value?: boolean): boolean | void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
