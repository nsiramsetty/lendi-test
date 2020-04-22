class ApplicationsDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert({
      applicant_first_name: 'John',
      applicant_last_name: 'Doe',
      loan_amount: 400000,
      lender_id: 'CMB',
      assets: [{
        name: 'House',
        value: 2000
      }],
    liabilities: [{
        name: 'Loan',
        value: 2000

      }]
    });
    this.insert({
      applicant_first_name: 'John',
      applicant_last_name: 'Doe',
      loan_amount: 400000,
      lender_id: 'CMB',
      assets: [{
        name: 'House',
        value: 2000
      }],
      liabilities: [{
        name: 'Loan',
        value: 2000
      }]
    });
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(application) {
    const record = {
      id: this._counter,
      deleted: false,
      ...application,
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }

  update(application,id) {
    const record = {
      id: id,
      deleted: false,
      ...application,
    };

    this._data[id]= record;

    return Promise.resolve(record);
  }

  deleteApp(application,id) {
    const record = {
      ...application,
    };

    record.deleted = true;

    this._data[id]= record;

    return Promise.resolve(record);
  }
}

export default new ApplicationsDatabase();
