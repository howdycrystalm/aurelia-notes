export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Notes';
    config.map([
      { route: '', moduleId: 'welcome' },
      { route: 'settings', moduleId: 'settings/index', title: 'Setting'}
    ]);

    this.router = router;
  }
}
