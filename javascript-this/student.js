/* exported student */
var student = {
  firstName: 'Heerak',
  lastName: 'Moon',
  subject: 'JavaScript',
  getFullName: function (firstName, lastName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function (firstName, lastName, subject) {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
