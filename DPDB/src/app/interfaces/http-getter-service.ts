import { GetterService } from './getter-service';
import { Observable } from 'rxjs';

export interface HttpGetterService extends GetterService {
  getURLs(): Observable<Array<string>>;
}