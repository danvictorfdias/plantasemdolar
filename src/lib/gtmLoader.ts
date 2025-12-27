interface GTMEvent {
  event: string;
  [key: string]: unknown;
}

class GTMLoader {
  private isLoaded = false;
  private eventQueue: GTMEvent[] = [];
  private retryIntervalId: number | null = null;

  constructor() {
    this.init();
  }

  private init() {
    if (typeof window === 'undefined') return;

    this.checkGTMLoadedInitial();
  }

  private checkGTMLoadedInitial() {
    const checkOnce = () => {
      if (this.isGTMAvailable()) {
        this.onGTMLoaded();
      } else {
        this.startBackgroundRetry();
      }
    };

    setTimeout(checkOnce, 500);
  }

  private startBackgroundRetry() {
    if (this.retryIntervalId !== null) return;

    this.retryIntervalId = window.setInterval(() => {
      if (this.isGTMAvailable()) {
        this.onGTMLoaded();
        if (this.retryIntervalId !== null) {
          clearInterval(this.retryIntervalId);
          this.retryIntervalId = null;
        }
      }
    }, 3000);
  }

  private isGTMAvailable(): boolean {
    return !!(
      window.dataLayer &&
      Array.isArray(window.dataLayer) &&
      window.dataLayer.length > 0
    );
  }

  private onGTMLoaded() {
    this.isLoaded = true;
    this.flushEventQueue();
  }

  private flushEventQueue() {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event) {
        this.pushToDataLayer(event);
      }
    }
  }

  private pushToDataLayer(event: GTMEvent) {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  public push(event: GTMEvent): void {
    if (this.isLoaded) {
      this.pushToDataLayer(event);
    } else {
      this.eventQueue.push(event);
    }
  }

  public getStatus(): 'loaded' | 'loading' | 'pending' {
    if (this.isLoaded) return 'loaded';
    return 'loading';
  }

  public isReady(): boolean {
    return this.isLoaded;
  }
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtmLoader?: GTMLoader;
  }
}

export const gtmLoader = new GTMLoader();

if (typeof window !== 'undefined') {
  window.gtmLoader = gtmLoader;
}
