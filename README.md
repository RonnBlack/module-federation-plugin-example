# Example for @angular-architects/module-federation

#### 2022-12-04
- Attempted to change into NX workspace but it didn't like the custom builder.
- I am saving this branch just to for reference.

```
$ ng add @nrwl/angular
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. Yes

Thank you for sharing pseudonymous usage data. Should you change your mind, the following
command will disable this feature entirely:

    ng analytics disable

Global setting: enabled
Local setting: enabled
Effective status: enabled
ℹ Using package manager: npm
✔ Found compatible package version: @nrwl/angular@15.2.4.
✔ Package information loaded.

The package @nrwl/angular@15.2.4 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
The workspace cannot be migrated because of the following issues:

---------
  shell
---------

  - Unsupported builders:
    - Errors:
      - The "build" target is using an unsupported builder "ngx-build-plus:browser".
      - The "serve" target is using an unsupported builder "ngx-build-plus:dev-server".
      - The "extract-i18n" target is using an unsupported builder "ngx-build-plus:extract-i18n".
    - The supported builders for applications are: "@angular-devkit/build-angular:browser", "@angular-devkit/build-angular:protractor", "@cypress/schematic:cypress", "@angular-devkit/build-angular:extract-i18n", "@nguniversal/builders:prerender", "@angular-devkit/build-angular:dev-server", "@angular-devkit/build-angular:server", "@nguniversal/builders:ssr-dev-server", "@angular-devkit/build-angular:karma" and "@angular-eslint/builder:lint".

--------
  mfe1
--------

  - Unsupported builders:
    - Errors:
      - The "build" target is using an unsupported builder "ngx-build-plus:browser".
      - The "serve" target is using an unsupported builder "ngx-build-plus:dev-server".
      - The "extract-i18n" target is using an unsupported builder "ngx-build-plus:extract-i18n".
    - The supported builders for applications are: "@angular-devkit/build-angular:browser", "@angular-devkit/build-angular:protractor", "@cypress/schematic:cypress", "@angular-devkit/build-angular:extract-i18n", "@nguniversal/builders:prerender", "@angular-devkit/build-angular:dev-server", "@angular-devkit/build-angular:server", "@nguniversal/builders:ssr-dev-server", "@angular-devkit/build-angular:karma" and "@angular-eslint/builder:lint".

```

### Follow [Instructions](https://github.com/manfredsteyer/ng-conf-2022-lab/blob/main/readme.md)

This examples loads a microfrontend into a shell:

![Microfrontend Loaded into Shell](./result.png)

## Important Files

Have a particular look at the following files:

- ``readme.md``: Shows how to install dependencies and how to start the example
- ``projects\mfe1\webpack.config.js``: Microfrontend config
- ``projects\shell\webpack.config.js``: Shell config
- ``projects\shell\src\app\app.routes.ts``: Lazy route for microfrontend
- ``projects\shell\src\decl.d.ts``: Typing for mapped Url pointing to microfrontend

## Installation and Usage

- Install packages: ``yarn`` (!)*
- Start Micro Frontend (remote): ``ng serve mfe1 -o``
- Start Shell (host): ``ng serve shell -o``
- Make sure ``mfe1`` is started before ``shell`` is loaded into the browser
- Use the hyperlink ``flights`` in the ``shell`` to load `mfe1`

\* Please note, you **must** use **yarn** during the beta phase of CLI 11 b/c it allows to override dependencies to force the CLI into webpack 5.

## More Details on Module Federation

Have a look at this [article series about Module Federation](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)

## Angular Trainings, Workshops, and Consulting

- [Angular Trainings and Workshops](https://www.angulararchitects.io/en/angular-workshops/)
- [Angular Consulting](https://www.angulararchitects.io/en/consulting/)
