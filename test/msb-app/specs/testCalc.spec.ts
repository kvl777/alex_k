import { expect } from "chai";
import CommonMenuElements from "../pages/CommonMenuElements";

const commonElements = new CommonMenuElements();

const btnColorGrey = "224,224,224";
const btnColorOrange = "245,146,62";

describe("Test calculator", () => {

  before("open url", () => {
    browser.url("https://ahfarmer.github.io/calculator/");
  });

  function checkBtn(name: string, color: string): void {
    expect(commonElements.isBtnByNameDisplayed(name)).true;
    expect(commonElements.isBtnByNameClickable(name)).true;
    expect(commonElements.getBtnBackgroundColor(name)).contain(color);
  }

  function checkOperation(name1: string, name2: string, name3: string, name4: string, value: string): void {
    commonElements.clickBtnByName(name1);
    commonElements.clickBtnByName(name2);
    commonElements.clickBtnByName(name3);
    commonElements.clickBtnByName(name4);
    expect(commonElements.getCalcDisplayText()).equal(value);
    commonElements.clickBtnByName("AC");
    expect(commonElements.getCalcDisplayText()).equal("0");
  }

  it("Open calculator and check defaults", () => {
    checkBtn("0", btnColorGrey);
    checkBtn("1", btnColorGrey);
    checkBtn("2", btnColorGrey);
    checkBtn("3", btnColorGrey);
    checkBtn("4", btnColorGrey);
    checkBtn("5", btnColorGrey);
    checkBtn("6", btnColorGrey);
    checkBtn("7", btnColorGrey);
    checkBtn("8", btnColorGrey);
    checkBtn("9", btnColorGrey);
    checkBtn(".", btnColorGrey);
    checkBtn("÷", btnColorOrange);
    checkBtn("x", btnColorOrange);
    checkBtn("-", btnColorOrange);
    checkBtn("+", btnColorOrange);
    checkBtn("=", btnColorOrange);
    checkBtn("AC", btnColorGrey);
    checkBtn("+/-", btnColorGrey);
    checkBtn("%", btnColorGrey);
    expect(commonElements.isCalcDisplayDisplayed()).true;
    expect(commonElements.getCalcDisplayText()).equal("0");
  });

  it("Check simple operations", () => {
    checkOperation("1", "0", ".", "2", "10.2");
    checkOperation("3", "4", "5", "+/-", "-345");
    checkOperation("6", "x", "7", "=", "42");
    checkOperation("0", "÷", "8", "=", "0");
    checkOperation("9", "÷", "0", "=", "0"); // Bug - should be an error message
    checkOperation("0", "-", "4", "=", "-4");
    checkOperation("3", "+", "7", "=", "10");
    checkOperation("1", "2", "3", "%", "1.23");
  });
});
