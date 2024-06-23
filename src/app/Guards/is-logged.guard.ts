import { CanActivateFn } from '@angular/router';
import { StorageService } from '../Services/Storage Service/storage.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const storageService = new StorageService();
  if (!storageService.isLoggedIn()) {
      // alert('You are not authorized to view this page.');
    
    return false;
  }
  return true;
};
