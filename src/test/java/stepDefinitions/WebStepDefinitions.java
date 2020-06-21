package stepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import pages.Page1;
import pages.Page2;
import pages.Page3;
import pages.Wilko;

public class WebStepDefinitions extends BaseStepDef {

    private final String appURL = "http://qaclickacademy.com/";
    Page1 test1 = new Page1();
    Page2 test2 = new Page2();
    Page3 test3 = new Page3();
    Wilko wilko = new Wilko();

    @Given("open website")
    public void open_website() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        openWebsite(appURL);

    }

    @When("user login with {string} and {string}")
    public void userLoginWithUserNameAndPassword(String userName, String password) throws Exception {
        test1.obj1().click();
        test2.obj1().sendKeys(userName);
        test2.obj2().sendKeys(password);
    }

    @When("user register with {string} and {string}")
    public void userRegisterWithUserNameAndPassword(String userName, String password) throws Exception {
        test1.obj2().click();
        test3.obj1().sendKeys("userName");
        test3.obj2().sendKeys(userName);
        test3.obj3().sendKeys(password);
        test3.obj4().sendKeys(password);
    }

    @Given("open website {string}")
    public void openWebsiteHttpsWwwWilkoCom(String url) throws Exception {
        openWebsite(url);
    }

    @And("select the product")
    public void selectTheProduct() throws Exception {
        wilko.cookie().click();
        wilko.kitchenLink().click();
        wilko.cookwareLink().click();
        wilko.inductionCheckbox().click();
        jsClick(Locators.xpath, "(//span[contains(.,'Woks')])[1]");
        jsClick(Locators.xpath, "(//span[contains(.,'Wilko Aluminium Shot Blast Wok & Lid 28cm')]/following-sibling::span)[1]");
    }
}
