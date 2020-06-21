package pages;

import framework.BasePage;
import org.openqa.selenium.WebElement;

public class Page3 extends BasePage {
    public WebElement obj1() throws Exception {
        return getWebElement(Locators.id, "user_name");
    }

    public WebElement obj2() throws Exception {
        return getWebElement(Locators.id, "user_email");
    }
    public WebElement obj3() throws Exception {
        return getWebElement(Locators.id, "user_password");
    }
    public WebElement obj4() throws Exception {
        return getWebElement(Locators.id, "user_password_confirmation");
    }
    public WebElement obj5() throws Exception {
        return getWebElement(Locators.xpath, "//div[@class='content-box content-box-school-signup']/h1");
    }


}
