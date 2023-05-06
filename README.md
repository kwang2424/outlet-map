# Outlet Map powered by React and Spring Boot frameworks
# Authors: Kevin Wang and Andrew Lee (frontend) + Chloe Han, Edison Chen, and Christopher Li (backend)

The Problem:
Have you ever been in need of a charge and walk into a cafe only to awkwardly walk around to see that there are no outlets? This is where our web solution comes in.

Our Solution:
A web app that displays outlets in NYC in an interactive interface.

Users pin locations with available outlets and our program automatically stores longitude and latitude data in a local MySQL database and generates the matching pin. The app then displays that pin on an interactive NYC map. Functionality includes adding/removing pins, navigating the map, and adding descriptors/tags to pins.

Tools Used:
- ReactJS Framework
- Spring Boot Framework
- MySQL Database
- RESTful API

Challenges:
- Developing a usable frontend interface with basic functionality (SOLVED)
- Building a database to store important varaibles such as longitude, latitude, address, and descriptors (SOLVED)
- Updating the database after confirmation (SOLVED)
- Connecting the backend MySQL database to the frontend React framework locally (SOLVED)
- Connecting the backend MySQL database to the frontend React framework remotely (Work In Progress)

Next Steps:
- Get user feedback and iterate
- Develop and add necessary features + data fields (i.e. number of outlets, availability, user groups, etc.)
- Create new database for unique user info and link it to existing data points
- Establish remote connection to MySQL server

[Presentation](https://drive.google.com/file/d/1-kG0LoLKk2ss7srXB0UOUbPYzE8v7KSu/view?usp=sharing)

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
