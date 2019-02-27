import { Injectable, Optional, Inject } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LogFormatter } from './log.formatter';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    @Optional() private config: LoggerConfig,
    private formatter: LogFormatter
    ) {
  }

  debug(message: string): void {
    if (this.config && !this.config.enableDebug) return;
    console.debug('[DEBUG]', this.formatter.format(message));
  }

  log(message: string): void {
    console.log('[LOG]', this.formatter.format(message));
  }

}
