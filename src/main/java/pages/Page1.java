package pages;


import framework.BasePage;
import org.openqa.selenium.WebElement;

public class Page1 extends BasePage {

    public WebElement obj1() throws Exception {
        return getWebElement(Locators.xpath,"//a[contains(.,'Login')]");
    }
    public WebElement obj2() throws Exception {
        return getWebElement(Locators.xpath,"//a[contains(.,'Register')]");
    }
}
