const {  } = require("@playwright/test");
const { baseURL } = require("./constants");

exports.Users = class Users {
  constructor(page,domain,role,account) {
    this.page = page;
    this.buttonUserAdministration = page.getByRole("button", { name: "User Administration" });
    this.buttonUsersTab = page.getByText("Users");
    this.buttonUserDetail = page.getByRole("link", { name: account });
    this.tabDomainRoles = page.getByRole("tab", { name: "User domain roles" });
    this.buttonAdd = page.getByRole("button", { name: "Add" });
    this.domainList = page.getByLabel("Domain", { exact: true });
    this.domainChoice = page.getByRole("option").nth(domain);
    this.rolesList = page.getByLabel("Role", { exact: true });
    this.rolesChoice = page.getByRole("option").nth(role);
    this.noData = page.getByText('Nejsou dostupná žádná data');
    this.buttonCancel = page.locator('form').getByRole('button').first();
    this.buttonAddModal = page.locator("form").getByRole("button", { name: "Add" });




  }

  async domainRolesEdit() {
    //Going to account we want to edit
  // Left panel/User administration
  await this.buttonUserAdministration.click();
  
  // User Administration/Users
  await this.buttonUsersTab.click();

  // Clicking on user detail
  await this.buttonUserDetail.click();

  // In user detail we choose User domain roles tab
  await this.tabDomainRoles.click();

  // Clicking on button ADD
  await this.buttonAdd.click();

  // Clicking on list
  await this.domainList.click();

  // Clicking on a domain which value is set in constants Domain
  await this.domainChoice.click()

  // Clicking on a list with roles
  await this.rolesList.click();

  //Clicking on first data in a list and if there is no data it will pass it
  if(this.noData.isVisible){
    await this.buttonCancel.click()
  } else {
    await this.rolesChoice.click();
  
  // Confirm a change by clicking on button ADD
  await this.buttonAddModal.click();
}


  }

}