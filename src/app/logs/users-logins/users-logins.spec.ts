import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLogins } from './users-logins';

describe('UsersLogins', () => {
  let component: UsersLogins;
  let fixture: ComponentFixture<UsersLogins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLogins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersLogins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
