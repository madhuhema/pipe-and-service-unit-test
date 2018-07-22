import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   providers: [AuthService]
    // });
  service = new AuthService();
  });
   afterEach(() => {
     service = null;
     localStorage.removeItem('token');
   });
   // service method called after setting a token
  it('should return true from isAuthenticated when there is a token' , () => {
   localStorage.setItem('token', '1234');
   expect(service.isAuthenticated()).toBeTruthy();
  });
  // service method called without setting a token
  it('should return false from isAuthenticated when there is no token' , () => {
   expect(service.isAuthenticated()).toBeFalsy();
  });
});
