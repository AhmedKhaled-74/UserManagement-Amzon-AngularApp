import { Routes } from '@angular/router';
import { Notfound } from './notfound/notfound.js';

import { Register } from './register/register.js';
import { Login } from './login/login.js';
import { authGuard } from './guards/auth-guard.js';
import { ConfirmEmail } from './confirm-email/confirm-email.js';
import { ConfirmEmailSuccess } from './confirm-email-success/confirm-email-success.js';
import { Home } from './home/home.js';
import { ResetPassword } from './reset-password/reset-password.js';
import { Profile } from './profile/profile.js';
import { Users } from './users/users.js';
import { AdminGuard } from './guards/admin-guard.js';
import { Roles } from './roles/roles.js';
import { Permissions } from './permissions/permissions.js';
import { UserActivities } from './logs/user-activities/user-activities.js';
import { UserLogins } from './logs/user-logins/user-logins.js';
import { UsersActivities } from './logs/users-activities/users-activities.js';
import { UsersLogins } from './logs/users-logins/users-logins.js';
import { RolesActivities } from './logs/roles-activities/roles-activities.js';

export const routes: Routes = [
  { path: '', redirectTo: 'account/login', pathMatch: 'full' },

  { path: 'account/register', component: Register },
  { path: 'account/login', component: Login },
  { path: 'account/confirm-email', component: ConfirmEmail },
  { path: 'account/reset-password', component: ResetPassword },
  {
    path: 'account/confirm-email-success',
    component: ConfirmEmailSuccess,
    canActivate: [authGuard],
  },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  {
    path: 'admin/users',
    component: Users,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'admin/roles',
    component: Roles,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'admin/logs/user-activities',
    component: UsersActivities,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'admin/logs/user-activities/:userId',
    component: UserActivities,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'admin/logs/user-logins',
    component: UsersLogins,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'admin/logs/user-logins/:userId',
    component: UserLogins,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'admin/logs/roles-activities',
    component: RolesActivities,
    canActivate: [authGuard, AdminGuard],
  },
  {
    path: 'admin/permissions',
    component: Permissions,
    canActivate: [authGuard, AdminGuard],
  },

  { path: '**', component: Notfound },
];
