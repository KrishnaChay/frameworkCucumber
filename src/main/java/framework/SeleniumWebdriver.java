package framework;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class SeleniumWebdriver {

    public static WebDriver driver = null;

    //this is our driver that will be used for all selenium actions
    public Properties properties;

    public static WebDriver newDriver() throws Exception {
//        properties = new Properties();
//        FileInputStream fis = new FileInputStream("/Users/CYAX/Downloads/frameworkCucumber/src/test/resources/data.properties");
//        properties.load(fis);
//
//        String browser = properties.getProperty("browser");
        switch (System.getProperty("driverType")) {        //check our browser
            case "firefox": {
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
                break;
            }
            case "chrome": {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                break;
            }
            case "ie": {
                WebDriverManager.iedriver().setup();
                driver = new InternetExplorerDriver();
                break;
            }
            //if our browser is not listed, throw an error
            default: {
                WebDriverManager.phantomjs().setup();
                driver = new PhantomJSDriver();

            }
        }
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        return driver;

    }


}