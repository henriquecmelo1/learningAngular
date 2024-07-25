import { Routes } from '@angular/router';

// import { HomeComponent } from './components/home/home.component';
// import { DetailsComponent } from './components/details/details.component';
// import { SearchComponent } from './components/search/search.component';
// import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
// import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
// import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';

import * as Components from './components/index';

export const routes: Routes = [
    {path: '', component: Components.HomeComponent},
    {path: 'home', component: Components.HomeComponent},
    {path: 'details', component: Components.DetailsComponent},
    {path: 'details/actors', component: Components.DetailsActorsComponent},
    {path: 'details/movies', component: Components.DetailsMoviesComponent},
    {path: 'details/reviews', component: Components.DetailsReviewsComponent},
    {path: 'search', component: Components.SearchComponent},

    
];
