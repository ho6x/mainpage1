declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps {
  interface Map {
    new (element: HTMLElement, options?: MapOptions): Map;
  }

  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    zoom?: number;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
    zoomControl?: boolean;
  }

  interface LatLng {
    lat(): number;
    lng(): number;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  interface Marker {
    new (options: MarkerOptions): Marker;
    setPosition(position: LatLng | LatLngLiteral): void;
    getPosition(): LatLng | null;
    setMap(map: Map | null): void;
    addListener(event: string, handler: Function): void;
    set(key: string, value: any): void;
    get(key: string): any;
  }

  interface MarkerOptions {
    position: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    draggable?: boolean;
    animation?: any;
  }

  interface Circle {
    new (options: CircleOptions): Circle;
    setCenter(center: LatLng | LatLngLiteral): void;
    getCenter(): LatLng | null;
    setRadius(radius: number): void;
    getRadius(): number;
    setMap(map: Map | null): void;
    addListener(event: string, handler: Function): void;
  }

  interface CircleOptions {
    map?: Map;
    center?: LatLng | LatLngLiteral;
    radius?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
    editable?: boolean;
  }

  interface InfoWindow {
    new (options: InfoWindowOptions): InfoWindow;
    open(map?: Map, anchor?: Marker): void;
    close(): void;
  }

  interface InfoWindowOptions {
    content?: string | Node;
    position?: LatLng | LatLngLiteral;
  }

  const Animation: {
    DROP: number;
  };
}

export {};
