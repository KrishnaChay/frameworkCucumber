package pages;

import framework.BasePage;
import org.openqa.selenium.WebElement;

public class Wilko extends BasePage {

    public WebElement cookie() throws Exception {
        return getWebElement(Locators.xpath, "//button[@class='consent-accept btn btn-small btn-primary']");
    }



    public WebElement kitchenLink() throws Exception {
        return getWebElement(Locators.xpath, "(//a[contains(.,'Kitchen & Dining')])[1]");
    }

    public WebElement cookwareLink() throws Exception {
        return getWebElement(Locators.xpath, "//a[contains(.,'Cookware')]");
    }

    public WebElement inductionCheckbox() throws Exception {
        return getWebElement(Locators.xpath, "(//span[contains(.,'Induction Suitable')])[1]");
    }

//    public WebElement woksCheckbox() throws Exception {
//        return getWebElement(Locators.xpath, "(//span[contains(.,'Woks')])[1]");
//    }

    public WebElement addCart() throws Exception {
        return getWebElement(Locators.xpath, "(//span[contains(.,'Wilko Aluminium Shot Blast Wok & Lid 28cm')]/following-sibling::span)[1]");
    }



}
