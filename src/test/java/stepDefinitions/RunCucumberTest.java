package stepDefinitions;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",
        glue = "stepDefinitions",
        tags = "@testNow",
        monochrome = true,
        strict = true,
        plugin = {"pretty", "html:target/cucumber", "junit:target/cucumber.xml", "json:target/cucumber.json",
        "rerun:target/rerun.txt"}
)
public class RunCucumberTest {
}
