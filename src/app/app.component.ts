import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {AuthFormComponent} from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <mat-toolbar color="primary">Angular Component Factory Resolver</mat-toolbar>
    <mat-toolbar color="basic">
      <div class="button-row">
        <button mat-raised-button 
                (click)="createLoginComponent()"
                *ngIf="!loginComponent">
          Create Login Component
        </button>
        <button mat-raised-button
                (click)="createRegisterComponent()"
                *ngIf="!registerComponent">
          Create Register Component
        </button>
        <button mat-raised-button
                (click)="reorderComponents()"
                *ngIf="loginComponent && registerComponent">
          Reorder Components
        </button>
        <button mat-raised-button 
                (click)="destroyComponents()"
                *ngIf="loginComponent && registerComponent">
          Destroy Components
        </button>
      </div>
    </mat-toolbar>
    <mat-card>
      <mat-card-content>
        <template #authForm></template>
      </mat-card-content>
      </mat-card>
  `
})
export class AppComponent {

  @ViewChild('authForm', {read: ViewContainerRef}) container: ViewContainerRef;
  authFormFactory: ComponentFactory<AuthFormComponent>;


  loginComponent: ComponentRef<AuthFormComponent>;
  registerComponent: ComponentRef<AuthFormComponent>;

  constructor(private resolver: ComponentFactoryResolver) {
    this.authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
  }

  createLoginComponent(): void {
    this.loginComponent = this.container.createComponent(this.authFormFactory);
  }

  createRegisterComponent(): void {
    this.registerComponent = this.container.createComponent(this.authFormFactory);
    this.registerComponent.instance.title = 'Join us';
    this.registerComponent.instance.buttonText = 'Signup';
  }

  reorderComponents(): void {
    let index;
    this.container.indexOf(this.loginComponent.hostView) === 0 ? index = 1 : index = 0;
    this.container.move(this.loginComponent.hostView, index);
  }

  destroyComponents(): void {
    this.loginComponent.destroy();
    this.registerComponent.destroy();
    this.loginComponent = undefined;
    this.registerComponent = undefined;
  }
}
