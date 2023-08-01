var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "some value";
  leastFavoriteCustomer = "new value";
}
