export interface Route {
  path: string;
  name: string;
  component: () => Promise<any>;
}

export interface Router {
  routes: Route[];
}

declare const router: Router;

export default router;
