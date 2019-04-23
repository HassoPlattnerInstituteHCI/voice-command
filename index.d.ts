declare module 'voice-command' {

  import { EventEmitter } from 'events';
  export default class VoiceCommand extends EventEmitter {
      public constructor(commands: string[]);
      public startListening(): void;
      public stopListening(): void;
  }
}