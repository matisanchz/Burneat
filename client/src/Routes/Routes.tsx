
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Pages/index';

function Routes() {
  return (
    <Switch>
        <Route exact component={Home} path="/" />
    </Switch>
  )
}

export default Routes;