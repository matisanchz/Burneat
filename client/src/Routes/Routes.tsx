
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/index';
import Layout from '../Layouts/Layout'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>

                <Switch>
                    <Route exact component={Home} path="/" />
                </Switch>

            </Layout>
        </BrowserRouter>
    )
}

export default Routes;