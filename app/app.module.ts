import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { RouterModule } from '@angular/router'

import { 
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    EventRouteActivator
 } from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

@NgModule({
    imports:[BrowserModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [EventService, 
                ToastrService, 
                EventRouteActivator,
                EventListResolver,
                AuthService,
                { provide: 'canDeactivateCreateEvent', 
                useValue: checkDirtyState}],
    bootstrap: [EventsAppComponent]
})
export class AppModule{ }

    function checkDirtyState(component: CreateEventComponent){
        if (component.isDirty)
        return true;
    }