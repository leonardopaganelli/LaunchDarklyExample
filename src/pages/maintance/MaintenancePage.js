import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import s from './MaintenancePage.module.scss';

class MaintenancePage extends React.Component {
  render() {
    return (
      <div className={s.maintenancePage}>
        <Container>
          <div className={`${s.maintenanceContainer} mx-auto`}>
            <h1 className={s.maintenanceCode}>Maintenance</h1>
            <p className={s.maintenanceInfo}>
              Opps, it seems that this page is in maintenance.
            </p>
            <p className={[s.maintenanceHelp, 'mb-3'].join(' ')}>
              If you are sure it should, please search for it:
            </p>
            <Form method="get">
              <FormGroup>
                <Input className="input-no-border" type="text" placeholder="Search Pages" />
              </FormGroup>
              <Link to="app/extra/search">
                <Button className={s.maintenanceBtn} type="submit" color="inverse">
                  Search <i className="fa fa-search text-secondary ml-xs" />
                </Button>
              </Link>
            </Form>
          </div>
          <footer className={s.pageFooter}>
            2020 &copy; Light Blue Template - React Admin Dashboard Template.
          </footer>
        </Container>
      </div>
    );
  }
}

export default MaintenancePage;
