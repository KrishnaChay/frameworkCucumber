package pages;

import framework.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import javax.xml.xpath.XPath;

public class Page2 extends BasePage {

    public WebElement obj1() throws Exception {
        return getWebElement(Locators.id,"user_email");
    }
    public WebElement obj2() throws Exception {
        return getWebElement(Locators.id,"user_password");
    }

}
