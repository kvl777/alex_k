export default class Page {

  public getElement(element: string): WebdriverIO.Element {
    return $(element);
  }

  public isElementDisplayed(element: string): boolean {
    return this.getElement(element).isDisplayed();
  }

  public waitUntilElementDisplayed(element: string): void {
    browser.waitUntil(() => {
      return this.isElementDisplayed(element);
    });
  }

  public isElementClickable(element: string): boolean {
    return this.getElement(element).isClickable();
  }

  public waitUntilElementClickable(element: string): void {
    browser.waitUntil(() => {
      return this.isElementClickable(element);
    });
  }

  public getElementText(element: string): string {
    this.waitUntilElementDisplayed(element);
    return this.getElement(element).getText();
  }

  public clickElement(element: string): void {
    this.waitUntilElementClickable(element);
    this.getElement(element).click();
  }

  public getElementCSSProperty(element: string, property: string): WebdriverIO.CSSProperty {
    return this.getElement(element).getCSSProperty(property).value;
  }
}
