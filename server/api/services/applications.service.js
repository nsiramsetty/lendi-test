import l from '../../common/logger';
import db from './applications.db.service';

class ApplicationsService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(application) {
    return db.insert(application);
  }

  update(application, id) {
    return db.update(application, id);
  }

  deleteApp(application, id) {
    return db.deleteApp(application, id);
  }
}

export default new ApplicationsService();
