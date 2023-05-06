# Outlet Map powered by React and Spring Boot frameworks

Our web app displays outlets in NYC in an interactive interface. Users can drop pins on the map to indicate outlet locations which is automatically saved in a local MySQL database.

[Presentation](https://drive.google.com/file/d/1-kG0LoLKk2ss7srXB0UOUbPYzE8v7KSu/view?usp=sharing).

## Usage

To run this program, you need a [Mapbox token](http://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens). You can either set it as `MAPBOX_TOKEN` in `app.js`, or set a `MapboxAccessToken` environment variable in the command line.

```bash
npm i
npm run start
```

To build a production version:

```bash
npm run build
```
