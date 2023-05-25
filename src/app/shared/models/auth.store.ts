import { Injectable } from "@angular/core";
import { akitaConfig, Store, StoreConfig } from "@datorama/akita";

export interface UserSessionState {
  id?: number;
  name?: string;
  email?: string;
  access_token?: string;
}

export function createInitialState(): UserSessionState {
  return {
    id: undefined,
    name: undefined,
    email: undefined,
    access_token: undefined
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class UserSessionStore extends Store<UserSessionState> {
  constructor() {
    super(createInitialState());
    akitaConfig({ resettable: true });
  }
}
