$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/sampleTest.feature");
formatter.feature({
  "name": "Sample framework",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "sample test1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.step({
  "name": "user login with \u0027\u003cuserName\u003e\u0027 and \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "test",
        "test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "sample test1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.open_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login with \u0027test\u0027 and \u0027test\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.userLoginWithUserNameAndPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027cyax-C02Q3A6GG8WN\u0027, ip: \u0027fdaa:bbcc:ddee:0:7d1e:5ac:ebd0:8016%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003d/var/folders/xv/82hf63qn3w933wt9vqdh6jrc0000gq/T/.com.google.Chrome.Ovi7f7}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dMAC, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54614}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: d21cf98f12a3edddd0ef5c6cc34c69e0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:532)\n\tat stepDefinitions.Hooks.endTest(Hooks.java:37)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "sample test2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.step({
  "name": "user register with \u0027\u003cuserName\u003e\u0027 and \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "test1",
        "test2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "sample test2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.open_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user register with \u0027test1\u0027 and \u0027test2\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.userRegisterWithUserNameAndPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027cyax-C02Q3A6GG8WN\u0027, ip: \u0027fdaa:bbcc:ddee:0:7d1e:5ac:ebd0:8016%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003d/var/folders/xv/82hf63qn3w933wt9vqdh6jrc0000gq/T/.com.google.Chrome.oVzSuO}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dMAC, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54829}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: c056e5caa041fddcbc531882c8a86f61\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat stepDefinitions.WebStepDefinitions.userRegisterWithUserNameAndPassword(WebStepDefinitions.java:37)\n\tat ✽.user register with \u0027test1\u0027 and \u0027test2\u0027(file:///Users/CYAX/Downloads/frameworkCucumber/src/test/resources/features/sampleTest.feature:16)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/sampleTest1.feature");
formatter.feature({
  "name": "Sample framework1",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "sample test11",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.step({
  "name": "user login with \u0027\u003cuserName\u003e\u0027 and \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "test",
        "test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "sample test11",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.open_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login with \u0027test\u0027 and \u0027test\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.userLoginWithUserNameAndPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027cyax-C02Q3A6GG8WN\u0027, ip: \u0027fdaa:bbcc:ddee:0:7d1e:5ac:ebd0:8016%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003d/var/folders/xv/82hf63qn3w933wt9vqdh6jrc0000gq/T/.com.google.Chrome.Ovi7f7}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dMAC, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54614}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: d21cf98f12a3edddd0ef5c6cc34c69e0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat stepDefinitions.WebStepDefinitions.userLoginWithUserNameAndPassword(WebStepDefinitions.java:30)\n\tat ✽.user login with \u0027test\u0027 and \u0027test\u0027(file:///Users/CYAX/Downloads/frameworkCucumber/src/test/resources/features/sampleTest1.feature:7)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "sample test21",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.step({
  "name": "user register with \u0027\u003cuserName\u003e\u0027 and \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "test1",
        "test2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "sample test21",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.open_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user register with \u0027test1\u0027 and \u0027test2\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.WebStepDefinitions.userRegisterWithUserNameAndPassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027cyax-C02Q3A6GG8WN\u0027, ip: \u0027fdaa:bbcc:ddee:0:7d1e:5ac:ebd0:8016%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003d/var/folders/xv/82hf63qn3w933wt9vqdh6jrc0000gq/T/.com.google.Chrome.oVzSuO}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dMAC, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54829}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: c056e5caa041fddcbc531882c8a86f61\n*** Element info: {Using\u003did, value\u003duser_email}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat framework.BasePage.getWebElement(BasePage.java:192)\n\tat pages.Page3.obj2(Page3.java:12)\n\tat stepDefinitions.WebStepDefinitions.userRegisterWithUserNameAndPassword(WebStepDefinitions.java:39)\n\tat ✽.user register with \u0027test1\u0027 and \u0027test2\u0027(file:///Users/CYAX/Downloads/frameworkCucumber/src/test/resources/features/sampleTest1.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027cyax-C02Q3A6GG8WN\u0027, ip: \u0027fdaa:bbcc:ddee:0:7d1e:5ac:ebd0:8016%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003d/var/folders/xv/82hf63qn3w933wt9vqdh6jrc0000gq/T/.com.google.Chrome.oVzSuO}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dMAC, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54829}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: c056e5caa041fddcbc531882c8a86f61\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:532)\n\tat stepDefinitions.Hooks.endTest(Hooks.java:37)\n",
  "status": "failed"
});
});