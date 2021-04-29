import Page from "./Page";

const calcDisplay = ".component-display"

export default class CommonMenuElements extends Page {
  public getBtnByName(name: string): WebdriverIO.Element {
    return this.getElement("//button[text() = '" + name + "']");
  }

  public isBtnByNameDisplayed(name: string): boolean {
    return this.isElementDisplayed(this.getBtnByName(name));
  }

  public isBtnByNameClickable(name: string): boolean {
    return this.isElementClickable(this.getBtnByName(name));
  }

  public getBtnBackgroundColor(name: string): WebdriverIO.CSSProperty {
    return this.getElementCSSProperty(this.getBtnByName(name), "background-color");
  }

  public clickBtnByName(name: string): void {
    this.clickElement(this.getBtnByName(name));
  }

  public isCalcDisplayDisplayed(): boolean {
    return this.isElementDisplayed(calcDisplay);
  }

  public getCalcDisplayText(): string {
    return this.getElementText(calcDisplay);
  }
}
