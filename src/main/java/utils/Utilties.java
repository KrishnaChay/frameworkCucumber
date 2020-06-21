package utils;

import framework.BasePage;

public class Utilties extends BasePage {

    public void openWebsite(String url) throws Exception {
        driver.get(url);
    }

}
