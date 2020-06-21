package stepDefinitions;

import framework.BasePage;

public class BaseStepDef extends BasePage {

    public void openWebsite(String url) throws Exception {
        driver.get(url);
    }

}
