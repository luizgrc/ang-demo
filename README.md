
# Sesion 6

Cambiar Version de Angular.
npm unistall -g angular -cli.
npm cache clean --force.
npm install @angular/cli@1.68.


------
Inciar comando cuando no tienes el node_modules.
npm install.
Cancelar terminal Ctrl + c.
Iniciar Proyecto en puerto diferente.
ng serve --port 4500.
Compilar y abrir proyecto en navegador.
ng serve --open.

# Anotes Git

Iniciar proyecto Git Local.
git init.

git add --A.

git status.

git commit --m 'Mi Primer commit'.

Agregar un repositorio git remoto al proyecto local.

git remote add origin https://github.com/luizgrc/mediaapp-backend.git.

Mandar nuestro proyecto local al remoto.
git push origin master.

Obtener cambios de branch del repositorio remoto
git fetch.

Combinar branchs.
git merge origin/master.

Regresar al commit anterior
git reset --hard
---------------------

## Posibles Errores

git push origin master.
! Rejected master -> master (fetch first).

git pull origin master.

! Rejected master -> master(non-fast-forward).

git merge origin/master.
faltal: refusing to merge unrelated histories.
Solucion:.

git pull --rebase origin master



---------------------



# AngDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


