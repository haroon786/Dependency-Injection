import {InjectionToken} from '@angular/core';
import {ApiConfig} from '../app/apiConfig';

export const apiConfigValue=new InjectionToken<ApiConfig>('Api values');
