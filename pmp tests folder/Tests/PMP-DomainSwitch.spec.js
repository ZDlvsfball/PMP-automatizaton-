import { LoginPage } from "../src/LoginPage.js";
import { HomePage } from "../src/HomePage.js";
const { test, expect } = require("@playwright/test");
const constants = require("../src/constants.js");

const username = constants.username;
const password = constants.password;
const baseURL = constants.baseURL;
const loggedOUTpageTitle = constants.loggedOUTpageTitle;
const mainDomain = constants.mainDomain;

test("Domain switch", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage(baseURL);
  await login.login(username, password);
  await login.loginAssert();

  //HomePage

  const home = new HomePage(page,mainDomain);
  await home.switchDomains();
  await home.switchDomainsAssert();

  //LogOut
  await login.logOut();
  await login.logOutAssert(loggedOUTpageTitle);
});
